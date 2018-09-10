import React from 'react';
import store from '../state/store';
import '../styles/App.css';
class Output extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            style: {
                backgroundColor: store.getState().color,
                width: store.getState().size,
                height: store.getState().size,
                borderRadius: store.getState().border,
            }
        };
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                style: {
                    backgroundColor: store.getState().color,
                    width: store.getState().size,
                    height: store.getState().size,
                    borderRadius: store.getState().border,
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
                <div style={this.state.style}>
                    Dynamic
                </div>
            </div>
        );
    }
}

export default Output;
