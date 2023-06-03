import React from "react";
import {deserialize} from "../ngs-types";

export class Arr extends Array {

    toWidget() {
        return <table>
            <tbody>
            {
                this.map((v, i) =>
                    <tr>
                        <td>{i}</td>
                        <td>{v.toWidget()}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }

    // TODO: Something more elegant
    static deserialize(a) {
        const ret = new Arr();
        for(let item of a.items) {
            ret.push(deserialize(item));
        }
        return ret;
    }
}
