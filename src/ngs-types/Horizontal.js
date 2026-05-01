import React from "react";

export class Horizontal {
    constructor({children}) {
        this.children = children;
    }

    toWidget(ctx) {
        return <div className="Horizontal">
            {this.children.map((c, i) => <span key={i}>{c.toWidget(ctx)}</span>)}
        </div>;
    }
}
