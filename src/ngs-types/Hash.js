import React from "react";
import {toWidget} from "../ngs-types";

export class Hash {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        return <table>
            <tbody>
            {
                this.data.items.map((item) =>
                    <tr>
                        <td>{toWidget(item[0])}</td>
                        <td>:</td>
                        <td>{toWidget(item[1])}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }
}
