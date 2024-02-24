import React from "react";

export class List {

    constructor({children}) {
        this.children = children;
    }

    toWidget() {
        return <table className={'List'}>
            <tbody>
            {
                this.children.map((v, i) =>
                    <tr>
                        {/*<td>{i}</td>*/}
                        <td>{v.toWidget()}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }

}
