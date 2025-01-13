import React from "react";

export class InfoTimelineItem {
    constructor({id, info}) {
        this.id = id;
        this.info = info;
    }

    toWidget() {
        return (
            <div key={this.id} className="InfoTimelineItem">
                <div className="InfoTimelineItem-info">{this.info}</div>
            </div>
        );
    }

}
