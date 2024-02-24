export class Revision {
    constructor(action_name, id, message) {
        this.action_name = action_name;
        this.id = id;
        this.message = message;
    }

    toWidget() {
        return <span><span class="ItemName">{this.action_name.value}</span>: <span class="MoreInfo" title={this.id.value}>{this.id.value.substring(0, 6)}</span> {this.message.value}</span>
    }
}
