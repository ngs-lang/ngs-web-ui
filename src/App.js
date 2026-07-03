import React from 'react';

import './App.css';
import TimelineContainer from "./TimelineContainer";
import CommandLine from "./CommandLine";
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
                bottom: 0,
                background: 'var(--bg)'
            }}>
                <div style={{position: 'absolute', left: 0, top: 0, width: "15rem", bottom: 0, background: 'var(--surface)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column'}}>
                    <div className="unobtrusive">Contexts</div>
                    <div className="AppMeta">
                        <a title="Next Generation Shell" href="https://github.com/ngs-lang/ngs" target="_blank" rel="noreferrer">NGS</a>
                        &nbsp;
                        <a href="https://github.com/ngs-lang/ngs-web-ui" target="_blank" rel="noreferrer">Web UI</a> v0.1.0
                    </div>
                </div>
                {/* timeline and command line in the center - start */}
                <div style={{position: 'absolute', left: "15rem", top: 0, right: "15rem", bottom: "3em", background: 'var(--bg)'}}>
                    <TimelineContainer></TimelineContainer>
                </div>
                <div style={{position: 'absolute', left: "15rem", height: "3rem", right: "15rem", bottom: 0, background: 'var(--bg)'}}>
                    <CommandLine></CommandLine>
                </div>
                {/* timeline and command line in the center - end */}
                <div style={{position: 'absolute', top: 0, right: 0, width: "15rem", bottom: 0, background: 'var(--surface)', borderLeft: '1px solid var(--border)'}}>
                    <div className="unobtrusive">Properties and Relations</div>
                </div>
            </div>
        </div>
    );
}

export default App;
