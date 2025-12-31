import React from "react";

export class GroupTimelineItem {
    constructor({children}) {
        this.children = children;
    }

    // Not the cleanest use of "ref".
    // Multiple GroupTimelineItem are present.
    // It happens that the "right one" to scroll to is the last
    // so it "wins" and the "ref" is set to it in the end of recursive
    // toWidget() calls.
    toWidget(ctx) {
        return <div className="GroupTimelineItem" ref={ctx.timelineElementToScrollTo}>
            {
                this.children.map(c => c.toWidget(ctx))
            }
        </div>
    }

}
