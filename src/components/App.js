import React, { Component } from 'react';
import Editor from './Editor';
import Output from './Output';
import Gallery from './Gallery';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Editor />
                    <Output />
                </div>
                <Gallery />
            </div>
        );
    }
}

export default App;