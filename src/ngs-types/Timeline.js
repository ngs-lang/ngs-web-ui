import React from "react";

export class Timeline {

    constructor({children}) {
        this.children = children;
    }

    toWidget() {
        return <div className="Timeline">
        {
            this.children.map(c => c.toWidget())
        }
        </div>
    }
}
