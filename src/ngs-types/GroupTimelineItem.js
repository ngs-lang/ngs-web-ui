import React from "react";

export class GroupTimelineItem {
    constructor({children}) {
        this.children = children;
    }

    toWidget() {
        return <div className="GroupTimelineItem">
            {
                this.children.map(c => c.toWidget())
            }
        </div>
    }

}
