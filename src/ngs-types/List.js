import React from "react";

export class List {

    constructor({children}) {
        this.children = children;
    }

    toWidget(ctx) {
        return <table className={'List'}>
            <tbody>
            {
                this.children.map((v, i) =>
                    <tr>
                        {/*<td>{i}</td>*/}
                        <td>{v.toWidget(ctx)}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }

}
