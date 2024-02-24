import React from "react";
import {Scalar} from "./Scalar";

export class Hash extends Map {

    // NGS naming convention
    map_idx_key_val(cb) {
        const ret = [];
        let i = 0;
        for (let [k, v] of this.entries()) {
            ret.push(cb(i++, k, v));
        }
        return ret;
    }

    slowGetScalarKey(key) {
        for(let [k, v] of this.entries()) {
            if(k instanceof Scalar && k.value === key) {
                return v;
            }
        }
    }

    toWidget() {
        return <table>
            <tbody>
            {
                this.map_idx_key_val((i, k, v) =>
                    <tr key={`dummy-${i++}`}>
                        <td>{k.toWidget()}</td>
                        <td>:</td>
                        <td>{v.toWidget()}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }

}
