import React from "react";
import {deserialize} from "../ngs-types";

export class Table {

    constructor(columns_names, rows) {
        this.columns_names = columns_names;
        this.rows = rows;
    }


    toWidget() {
        return <table>
            <thead>
            <tr>
                {/*<td className="unobtrusive">#</td>*/}
                {
                    this.columns_names.map((v, i) =>
                        <td key={i}>{v.toWidget()}</td>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                this.rows.map((row, i) =>
                    <tr key={i}>
                        {/*<td className="unobtrusive">{i}</td>*/}
                        {
                            row.map((v, i) =>
                                <td key={i}>{v.toWidget()}</td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>
        </table>
    }

    static deserialize(a) {
        return new Table(deserialize(a.columns_names), deserialize(a.rows));
    }
}
