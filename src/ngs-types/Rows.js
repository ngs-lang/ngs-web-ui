import React from "react";

export class Rows {

    constructor({children}) {
        this.children = children;
    }

    toWidget() {
        return <tbody>
        {
            this.children.map((row, i) =>
                <tr key={i}>
                    {row.toWidget()}
                </tr>
            )
        }
        </tbody>
    }
}
