// import './App.css';

import CommandLine from "./CommandLine";
import {Component} from "react";

class Timeline extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {'commands': []};
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
