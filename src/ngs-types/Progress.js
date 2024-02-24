export class Progress {
    constructor({step, total_steps}) {
        this.step = step;
        this.total_steps = total_steps;
    }

    toWidget() {
        return <progress value={this.step} max={this.total_steps}>{this.step}/{this.total_steps}</progress>
    }

}
