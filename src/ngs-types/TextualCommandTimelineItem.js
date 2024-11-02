import React from "react";

export class TextualCommandTimelineItem {
    constructor({id, command}) {
        this.id = id;
        this.command = command;
    }

    toWidget() {
        return (
            <div key={this.id} className="CommandTimelineItem">
                <div className="CommandTimelineItem-command">{this.command}</div>
            </div>
        );
    }

}
