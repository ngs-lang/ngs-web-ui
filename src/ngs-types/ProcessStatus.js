export class ProcessStatus {
    constructor({name, text}) {
        this.name = name;
        this.text = text;
    }
    toWidget() {
        return <span className={`status-${this.name}`}>{this.text}</span>

    }
}

// export class Succeeded extends ProcessStatus {
//     toWidget() {
//         return <span className={'status-succeeded'}>{this.text.value}</span>
//     }
// }
//
// export class Failed extends ProcessStatus {
//     toWidget() {
//         return <span className={'status-failed'}>{this.text.value}</span>
//     }
// }
