import React from "react";

export class Row {

    constructor({children}) {
        this.children = children;
    }


    toWidget() {
        return <>
        {
            this.children.map((cell, i) =>
                <td key={i}>
                    {cell.toWidget()}
                </td>
            )
        }
        </>
    }

}
