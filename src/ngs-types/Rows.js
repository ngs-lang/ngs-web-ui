import React from "react";

export class Rows {

    constructor({children}) {
        this.children = children;
    }

    toWidget(ctx) {
        return <tbody>
        {
            this.children.map((row, i) =>
                <tr key={i}>
                    {row.toWidget(ctx)}
                </tr>
            )
        }
        </tbody>
    }
}
