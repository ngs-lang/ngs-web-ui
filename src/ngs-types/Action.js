export class Action {
    constructor({stage_name, action_name, status}) {
        this.stage_name = stage_name;
        this.action_name = action_name;
        this.status = status;
    }

    toWidget() {
        return <span className={'Action'}>{this.stage_name}/{this.action_name}: {this.status}</span>
    }
}
