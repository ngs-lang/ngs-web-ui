import React from "react";

export class Columns {

    constructor({children}) {
        this.children = children;
    }

    toWidget(ctx) {
        return <thead className={'Columns'}>
            <tr className={'Columns'}>
                {
                    this.children.map((v, i) =>
                        <th key={i}>{v.toWidget(ctx)}</th>
                    )
                }
            </tr>
        </thead>
    }

}
