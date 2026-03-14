export class InteractionRecordTimelineItem {
    constructor({id, time, ir}) {
        this.id = id;
        this.time = time;
        this.ir = ir;
    }

    toWidget(_ctx) {
        return (
            <div key={this.id} className="InteractionRecordTimelineItem">
                <pre>{JSON.stringify(this.ir, null, 4)}</pre>
            </div>
        );
    }
}
