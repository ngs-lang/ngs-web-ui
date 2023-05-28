import React from "react";
import {toWidget} from "../ngs-types";

export class Table {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        return <table>
            <thead>
            <tr>
                <td className="unobtrusive">#</td>
                {
                    this.data.columns_names.items.map((v, i) =>
                        <td key={i}>{v.value}</td>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                this.data.rows.items.map((row, i) =>
                    <tr key={i}>
                        <td className="unobtrusive">{i}</td>
                        {
                            row.items.map((v, i) =>
                                <td key={i}>{toWidget(v)}</td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>
        </table>
    }
}
