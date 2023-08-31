import {deserialize} from "../ngs-types";

export class Action {
    constructor(stage_name, action_name, status) {
        this.stage_name = stage_name;
        this.action_name = action_name;
        this.status = status;
    }

    toWidget() {
        return <span>{this.stage_name.value}/{this.action_name.value}: {this.status.value}</span>
    }

    static deserialize(a) {
        return new Action(deserialize(a.fields.stage_name), deserialize(a.fields.action_name), deserialize(a.fields.status));
    }

}
