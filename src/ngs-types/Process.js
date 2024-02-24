import React from "react";
// command executable pid exit_code exit_signal stdout stderr

export class Process {
    constructor(command, executable, pid, exit_code, exit_signal, stdout, stderr) {
        this.command = command;
        this.executable = executable;
        this.pid = pid;
        this.exit_code = exit_code;
        this.exit_signal = exit_signal;
        this.stdout = stdout;
        this.stderr = stderr;
    }

    toWidget() {
        if (this.stderr.value) {
            return <table>
                <tbody>
                <tr>
                    <td className='unobtrusive'>stdout</td>
                    <td>
                        <pre>{this.stdout.value}</pre>
                    </td>
                </tr>
                <tr>
                    <td className='unobtrusive'>stderr</td>
                    <td>
                        <pre>{this.stderr.value}</pre>
                    </td>
                </tr>
                </tbody>
            </table>
        } else {
            return <pre>{this.stdout.value}</pre>;
        }
    }
}
