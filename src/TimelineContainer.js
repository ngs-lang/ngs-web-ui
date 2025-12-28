import React, {Component} from 'react';
import connector from "./Connector";

class TimelineContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {'timeline': null};
        connector.addEventListener('timeline', (e) => {
            console.log('TimelineContainer got timeline', e.detail);
            this.setState({'timeline': e.detail.toWidget()});
        })
    }

    clear() {
        this.setState({'timeline': null});
    }

    render() {
        return (
            <div className="TimelineContainer"
                 style={{
                     display: 'flex',
                     flexDirection: 'column',
                     position: 'absolute',
                     left: 0,
                     top: 0,
                     right: 0,
                     bottom: 0
                 }}>
                <div className="unobtrusive" onClick={this.clear.bind(this)} title="Click to clear (development tool)">Timeline</div>
                <div style={{marginTop: 'auto', marginBottom: '3em'}}>
                    {this.state.timeline}
                </div>
            </div>
        );
    }
}

export default TimelineContainer;
