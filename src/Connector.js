import debug0 from 'debug';
const debug = debug0('ngs-web-ui');

class Connector extends EventTarget {
    constructor() {
        super();
        this.sock = new WebSocket("ws://localhost:52000/");

        this.sock.onmessage = (event) => {
            console.log('onmessage', event);
            const data = JSON.parse(event.data);
            console.log('onmessage - parsed', data);
            this.dispatchEvent(new CustomEvent('message', {detail: data}));
        }
    }

    login(code) {
        debug('logging in', code);
        this.sock.send(JSON.stringify({type: 'auth', code: code}));
    }

}

export default new Connector();
