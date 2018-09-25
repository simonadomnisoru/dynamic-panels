import React from 'react';
import { Panel } from 'react-bootstrap';
import store from '../state/store';
import '../styles/App.css';
class Output extends React.PureComponent {
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
        if (this.state && this.state.style)
            return (
                <Panel>
                    <Panel.Heading>Output</Panel.Heading>
                    <Panel.Body> <div style={this.state.style}></div></Panel.Body>
                </Panel>
            );
        else return null;
    }
}

export default Output;
