import React, {Component} from 'react';
import connector from "./Connector";
import {toWidget} from "./ngs-types";

class Command extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            widget: null,
        }



        const listener = (e) => {
            if (e.detail && e.detail.id === props.id) {
                console.log('Command got message', e.detail);
                connector.removeEventListener('message', listener);
                if (e.detail.error) {
                    this.setState({widget: <div>{JSON.stringify(e.detail.error.data)}</div>});
                    return;
                }
                this.setState({'widget': toWidget(e.detail.result)});
                return;
                if (Array.isArray(e.detail.result)) {
                    this.setState({
                        'output': <table>
                            <tbody>
                            {
                                e.detail.result.map((v, i) =>
                                    <tr>
                                        <td>{i}</td>
                                        <td>{v}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    });
                    return;

                }
                this.setState({'output': e.detail.result});
            }
        };

        connector.addEventListener('message', listener)

    }

    render() {
        return (
            <div style={{backgroundColor: '#EEF', margin: '0.5em', textAlign: 'left'}}>
                <div>{this.props.line}</div>
                <div>{this.state.widget}</div>
            </div>
        );
    }
}

export default Command;
