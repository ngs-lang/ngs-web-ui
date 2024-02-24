export class LongStr {
    constructor(val) {
        this.val = val;
    }

    toWidget() {
        return <span class="MoreInfo" title={this.val.value}>{this.val.value.substring(0, 20)}</span>
    }
}
