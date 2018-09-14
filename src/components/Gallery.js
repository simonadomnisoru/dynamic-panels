import React from 'react';
import { Table, Button } from 'react-bootstrap';
import store from '../state/store';
class Gallery extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            outputs: {}
        };
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                outputs: store.getState().outputs
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Output</th>
                        <th>Save</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Table cell</td>
                        <td><Button bsStyle="primary" type="button">Select</Button></td>
                        <td><Button bsStyle="danger" type="button">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td><Button bsStyle="primary" type="button">Select</Button></td>
                        <td><Button bsStyle="danger" type="button">Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default Gallery;
