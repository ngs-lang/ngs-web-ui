import {deserialize} from "../ngs-types";

export class Status {
    constructor(val) {
        this.text = val;
    }
}

export class Succeeded extends Status {
    toWidget() {
        return <span className={'status-succeeded'}>{this.text.value}</span>
    }
    static deserialize(a) {
        return new Succeeded(deserialize(a.fields.text));
    }
}

export class Failed extends Status {
    toWidget() {
        return <span className={'status-failed'}>{this.text.value}</span>
    }
    static deserialize(a) {
        return new Failed(deserialize(a.fields.text));
    }
}
