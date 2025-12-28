import connector from './Connector';
import {Component} from "react";


class CommandLine extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            line: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.keyUp = this.keyUp.bind(this);
    }

    handleChange(event) {
        this.setState({line: event.target.value});
    }

    async keyUp(event) {
        // https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
        if (event.key !== "Enter") {
            return;
        }
        console.log("ENTER!!!");
        const line = this.state.line;
        this.setState({line: ''});
        const id = await connector.call('eval', line);
        console.log('CommandLine call', {id, line});
    }

    render() {
        return (
            <div className="CommandLine">
                <input type="text" value={this.state.line} style={{width: "90%"}} onChange={this.handleChange} onKeyUp={this.keyUp} autoFocus></input>
            </div>
        );
    }
}

export default CommandLine;
