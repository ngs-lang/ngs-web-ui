import React from "react";

export class ResultTimelineItem {
    constructor({children}) {
        this.children = children;
    }

    toWidget() {
        return <div className="ResultTimelineItem">
            {
                this.children.map(c => c.toWidget())
            }
        </div>
    }

}
