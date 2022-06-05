import React from "react";
import {toWidget} from "../ngs-types";

export class Arr {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        return <table>
            <tbody>
            {
                this.data.items.map((v, i) =>
                    <tr>
                        <td>{i}</td>
                        <td>{toWidget(v)}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }
}
