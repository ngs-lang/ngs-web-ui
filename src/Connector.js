import debug0 from 'debug';
import {deserialize} from "./ngs-types";
const debug = debug0('ngs-web-ui'); // TODO: use it

class Connector extends EventTarget {
    constructor() {
        super();
        console.log('Connector being constructed');
        this.id = 1;
        this.last_seen_version = null;
        this.sock = new WebSocket("ws://localhost:52000/");

        const pleaseAuthReceivedPromiseWithResolvers = Promise.withResolvers();
        this.pleaseAuthReceived = pleaseAuthReceivedPromiseWithResolvers.promise;

        const loggedInPromiseWithResolvers = Promise.withResolvers();
        this.loggedIn = loggedInPromiseWithResolvers.promise;
        this.loggingIn = false;

        let buf = '';

        this.sock.onmessage = (event) => {
            console.log('onmessage', event);
            if (event.data === 'ping') {
                console.debug('got ping');
                return;
            }
            buf += event.data;
            while(true) {
                const idx = buf.indexOf('\n');
                if(idx === -1) {
                    return;
                }
                const chunk = buf.slice(0, idx);
                buf = buf.slice(idx+1, buf.length);
                const data = JSON.parse(chunk);
                console.log('onmessage - parsed', data);

                if(data.type === 'auth_ok') {
                    // Using localStorage will make the secret available
                    // to other apps that happen to run on the same origin.
                    // During development it's http://127.0.0.1:PORT
                    // It only takes an app to listen on the same port (at another time) to get the secret.
                    // Hence, sessionStorage.
                    sessionStorage.setItem('secret', data.secret);
                    loggedInPromiseWithResolvers.resolve();
                }

                if(data.type === 'please_auth') {
                    pleaseAuthReceivedPromiseWithResolvers.resolve();
                }

                // TODO: more precise rules about when to deserialize
                if(data.result && data.result['$type']) {
                    data.result = deserialize(data.result);
                }

                this.dispatchEvent(new CustomEvent('message', {detail: data}));
            }
        }

        this.loggedIn.then(() => {
            this.startPolling()
        });
    }

    // TODO: reorganize code in a more React-aligned way
    async login(code) {
        if(this.loggingIn) {
            console.error('Connector.login(): Already logging in or logged in');
            return;
        }
        this.loggingIn = true;
        console.log('logging in', code , this.sock);
        await this.pleaseAuthReceived;
        console.log('sending auth');
        const secret = sessionStorage.getItem('secret');
        this.sock.send(JSON.stringify({type: 'auth', code, secret}));
    }

    // Maybe TODO: support Object params, not just Array
    async call(method, ...params) {
        await this.loggedIn;
        const id = this.id;
        this.id += 1;
        const message = JSON.stringify({
            jsonrpc: '2.0',
            id,
            method,
            params
        })
        console.log('Connector call', message);
        this.sock.send(message);
        return id;
    }

    waitForResponse(id) {
        const p = Promise.withResolvers();
        console.log('waitForResponse() waiting for', id);
        const listener = (e) => {
            if(e.detail.id === id) {
                console.log('waitForResponse() got response for', id);
                this.removeEventListener('message', listener);
                p.resolve(e.detail);
            }
        }
        this.addEventListener('message', listener);
        return p.promise;
    }

    async startPolling() {
        // noinspection InfiniteLoopJS
        while(true) {
            const id = await this.call('poll', this.last_seen_version);
            console.log('poll id', id);
            const response = await this.waitForResponse(id);
            console.log('poll response', response);
            this.last_seen_version = response.result.version;
            const timeline = deserialize(response.result.timeline)
            console.log('poll deserialized timeline', timeline);
            this.dispatchEvent(new CustomEvent('timeline', {detail: timeline}));
        }
    }

}

export default new Connector();
