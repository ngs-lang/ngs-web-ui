import React from "react";
import {deserialize} from "../ngs-types";

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

    static deserialize(a) {
        return new Process(
            'TODO' || deserialize(a.fields.command),
            'TODO' || deserialize(a.fields.executable),
            deserialize(a.fields.pid),
            deserialize(a.fields.exit_code),
            deserialize(a.fields.exit_signal),
            deserialize(a.fields.stdout),
            deserialize(a.fields.stderr)
        );
    }
}
