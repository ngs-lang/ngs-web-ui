import {deserialize} from "../ngs-types";

export class Progress {
    constructor(step, total_steps) {
        this.step = step;
        this.total_steps = total_steps;
    }

    toWidget() {
        // return <span>{this.step.value}/{this.total_steps.value}</span>
        return <progress value={this.step.value} max={this.total_steps.value}>{this.step.value}/{this.total_steps.value}</progress>
    }

    static deserialize(a) {
        return new Progress(deserialize(a.fields.step), deserialize(a.fields.total_steps));
    }

}
