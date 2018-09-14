import React from 'react';
import store from '../state/store';
import '../styles/App.css';
class Output extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            style: {}
        };
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                style: store.getState().editableOutput
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="Output">
                <div style={this.state.style}></div>
            </div>
        );
    }
}

export default Output;
