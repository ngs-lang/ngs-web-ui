import {deserialize} from "../ngs-types";

export class LongStr {
    constructor(val) {
        this.val = val;
    }

    toWidget() {
        return <span class="MoreInfo" title={this.val.value}>{this.val.value.substring(0, 20)}</span>
    }

    static deserialize(a) {
        return new LongStr(deserialize(a.fields.val));
    }
}
