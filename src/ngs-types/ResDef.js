import React from "react";
import {toWidget} from "../ngs-types";

export class ResDef {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        if (this.data.items.length === 0) {
            return <span>(not found)</span>
        }
        console.log('cols_names', this.data.cols_names);
        return <table>
            <thead>
            {
                this.data.cols_names.items.map(v =>
                    <th>{toWidget(v)}</th>
                )
            }
            </thead>
            <tbody>
            {
                this.data.items.map(toWidget)
            }
            </tbody>
        </table>
    }
}
