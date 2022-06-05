import React from "react";

export class Process {
    constructor(p) {
        this.data = p;
    }

    toWidget() {
        if (this.data.fields.stderr.value) {
            return <table>
                <tbody>
                <tr>
                    <td className='unobtrusive'>stdout</td>
                    <td>
                        <pre>{this.data.fields.stdout.value}</pre>
                    </td>
                </tr>
                <tr>
                    <td className='unobtrusive'>stderr</td>
                    <td>
                        <pre>{this.data.fields.stderr.value}</pre>
                    </td>
                </tr>
                </tbody>
            </table>
        } else {
            return <pre>{this.data.fields.stdout.value}</pre>;
        }
    }
}
