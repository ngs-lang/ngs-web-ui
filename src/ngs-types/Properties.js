import React from "react";

export class Properties {
    constructor({props}) {
        this.props = props;
        console.log('Properties', this.props);
    }

    toWidget(ctx) {
        return <table className={'Properties'}>
            <tbody>
            {
                Object.entries(this.props).map(([k, v]) =>
                    <tr>
                        <td>{k}</td>
                        {/*<td>WIDGET {JSON.stringify(v)}</td>*/}
                        <td>{v.toWidget(ctx)}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }

}
