import React, { Component } from 'react';
import Editor from './Editor';
import Output from './Output';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Editor/>
                <Output/>
            </div>
        );
    }
}

export default App;