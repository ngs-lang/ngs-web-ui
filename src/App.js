import React from 'react';

import './App.css';
import TimelineContainer from "./TimelineContainer";
import Login from "./Login";

function App() {

    return (
        <div className="App" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}>
            <Login/>
            <div style={{
                verticalAlign: 'bottom',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: "2em",
                background: '#EEE'
            }}>
                <div style={{position: 'absolute', left: 0, top: 0, width: "20em", bottom: 0, background: '#EEE'}}>
                    <div className="unobtrusive">Contexts</div>
                </div>
                <div style={{position: 'absolute', left: "20em", top: 0, right: "20em", bottom: 0, background: '#FFF'}}>
                    <TimelineContainer></TimelineContainer>
                </div>
                <div style={{position: 'absolute', top: 0, right: 0, width: "20em", bottom: 0, background: '#EEE'}}>
                    <div className="unobtrusive">Properties and Relations</div>
                </div>
            </div>
            <div className="StatusLine" style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: "2em",
                background: '#666',
                color: '#FFF',
                verticalAlign: 'bottom'
            }}>
                <div style={{
                    position: 'absolute',
                    left: "1em",
                    right: 0,
                    bottom: "0.5em",
                    textAlign: 'left'
                }}>
                    <a title="Next Generation Shell" href="https://github.com/ngs-lang/ngs" target="_blank">NGS</a>
                    &nbsp;
                    <a href="https://github.com/ngs-lang/ngs-web-ui" target="_blank">Web UI</a> v0.1.0
                </div>
            </div>
        </div>
    );
}

export default App;
