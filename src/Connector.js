import debug0 from 'debug';
const debug = debug0('ngs-web-ui');

class Connector extends EventTarget {
    constructor() {
        super();
        this.id = 1;
        this.sock = new WebSocket("ws://localhost:52000/");

        let buf = '';

        this.sock.onmessage = (event) => {
            console.log('onmessage', event);
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
                this.dispatchEvent(new CustomEvent('message', {detail: data}));
            }
        }
    }

    login(code) {
        debug('logging in', code);
        this.sock.send(JSON.stringify({type: 'auth', code: code}));
    }

    // Maybe TODO: support Object params, not just Array
    call(method, ...params) {
        // sock.send(JSON.stringify({"jsonrpc": "2.0", "id": 10, "method": "add_one", "params": [1000]}));
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

}

export default new Connector();
