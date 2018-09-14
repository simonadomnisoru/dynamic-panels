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
                style: {
                    backgroundColor: store.getState().editableOutput.color,
                    width: store.getState().editableOutput.size,
                    height: store.getState().editableOutput.size,
                    borderRadius: store.getState().editableOutput.border,
                }
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
