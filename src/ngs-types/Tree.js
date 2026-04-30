import React from "react";

export class Tree {
    constructor({node, children}) {
        this.node = node;
        this.children = children;
    }

    toWidget(ctx) {
        return <div className="Tree">
            <div className="Tree-node">{this.node.toWidget(ctx)}</div>
            {this.children.length > 0 && (
                <div className="Tree-children">
                    {this.children.map((c, i) =>
                        <div key={i} className="Tree-child">{c.toWidget(ctx)}</div>
                    )}
                </div>
            )}
        </div>;
    }
}
