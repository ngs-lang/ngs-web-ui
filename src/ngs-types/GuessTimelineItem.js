import React from "react";

export class GuessTimelineItem {
    constructor({id, pattern, description}) {
        this.id = id;
        this.pattern = pattern;
        this.description = description;
    }

    toWidget(_ctx) {
        return (
            <div key={this.id} className="GuessTimelineItem">
                <div>WIP: there will be option to select from several guesses and edit the pattern manually.</div>
                <div className="GuessTimelineItem-pattern">You have selected an item that matches the pattern: {JSON.stringify(this.pattern)}</div>
                <div className="GuessTimelineItem-description">The guess was based on: {this.description}</div>
            </div>
        );
    }

}
