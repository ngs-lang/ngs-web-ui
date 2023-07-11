// import './App.css';

import React, {Component} from 'react';
import CommandLine from "./CommandLine";
import connector from "./Connector";
import Command from "./Command";

class Timeline extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {'commands': []};
        connector.addEventListener('timeline_new_command', (e) => {
            console.log('Timeline got new command', e);
            // const command = <Command key={e.detail.id} id={e.detail.id} line={e.detail.line}></Command>;
            const line = e.detail.slowGetScalarKey('command').map(elt => elt.value).join(' ');
            const command = <Command line={line} widget={e.detail.toWidget()}></Command>;
            this.appendCommand(command);
        })
    }

    appendCommand(c) {
        this.setState(prevState => ({
            commands: [...prevState.commands, c]
        }));
    }

    clear() {
        this.setState({'commands': []});
    }

    render() {
        return (
            <div className="Timeline"
                 style={{
                     display: 'flex',
                     flexDirection: 'column',
                     position: 'absolute',
                     left: 0,
                     top: 0,
                     right: 0,
                     bottom: 0
                 }}>
                <div className="unobtrusive" onClick={this.clear.bind(this)} title="Click to clear">Timeline</div>
                <div style={{marginTop: 'auto', marginBottom: '3em'}}>
                    {this.state.commands}
                </div>
                <CommandLine appendCommand={this.appendCommand.bind(this)}></CommandLine>
            </div>
        );
    }
}

export default Timeline;
