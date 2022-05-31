import React, {Component} from 'react';
import connector from "./Connector";

class Command extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            output: '',
            error: ''
        }

        const listener = (e) => {
            if (e.detail && e.detail.id === props.id) {
                console.log('Command got message', e.detail);
                connector.removeEventListener('message', listener);
                if (e.detail.error) {
                    this.setState({error: JSON.stringify(e.detail.error.data)});
                    return;
                }
                if (e.detail.result.type === 'Process') {
                    this.setState({
                        'output': <table>
                            <tbody>
                            <tr>
                                <td className='unobtrusive'>stdout</td>
                                <td><pre>{e.detail.result.stdout}</pre></td>
                            </tr>
                            <tr>
                                <td className='unobtrusive'>stderr</td>
                                <td><pre>{e.detail.result.stderr}</pre></td>
                            </tr>
                            </tbody>
                        </table>
                    });
                    return;
                }
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
                <div>{this.state.output}</div>
                <div>{this.state.error}</div>
            </div>
        );
    }
}

export default Command;
