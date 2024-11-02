import React, {Component} from 'react';

export default class Command extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            widget: props.widget || null,
        }
    }

    render() {
        return (
            <div style={{margin: '0.5em', textAlign: 'left'}}>
                <div style={{fontWeight: 'bold'}}>{this.props.line}</div>
                <div style={{backgroundColor: '#EEE'}}>{this.state.widget}</div>
            </div>
        );
    }
}
