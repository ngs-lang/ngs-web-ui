import React from "react";

export class Section {
    constructor({header, body}) {
        this.header = header;
        this.body = body;
    }

    toWidget(ctx) {
        return <div className="Section">
            <div className="Section-header">{this.header.toWidget(ctx)}</div>
            <div className="Section-body">{this.body.toWidget(ctx)}</div>
        </div>;
    }
}
