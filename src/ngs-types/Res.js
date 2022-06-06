import React from "react";
import {toWidget} from "../ngs-types";

export class Res {
    constructor(a) {
        this.data = a;
    }

    toWidget() {
        window.rw = this;
        const props = this.data.items.filter(item => item[0].value === 'props')[0][1].items;

        return <tr>
            {
                props.map(item =>
                    <td>
                        { toWidget(item[1]) }
                    </td>
                )
            }
        </tr>
    }
}
