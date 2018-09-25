import React from 'react';
import Editor from './Editor';
import Output from './Output';
import Gallery from './Gallery';
import '../styles/App.css';

const App = () => {
    return (
        <div>
            <div className="App">
                <Editor />
                <Output />
            </div>
            <Gallery />
        </div>
    );
};

export default App;