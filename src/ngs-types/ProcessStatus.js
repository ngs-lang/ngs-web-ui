import {deserialize} from "../ngs-types";

export class Status {
    constructor(val) {
        this.text = val;
    }

    toWidget() {
        return <span>{this.text.value}</span>
    }


}

export class Succeeded extends Status {
    static deserialize(a) {
        return new Succeeded(deserialize(a.fields.text));
    }
}

export class Failed extends Status {
    static deserialize(a) {
        return new Succeeded(deserialize(a.fields.text));
    }
}
