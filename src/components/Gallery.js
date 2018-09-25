import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { deleteOutput } from '../state/dispatchers';
import store from '../state/store';
class Gallery extends React.PureComponent {
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

    handleDelete = (ev) => {
        deleteOutput(parseFloat(ev.target.value));
    }
    render() {
        if (this.state && this.state.outputs)
            return (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Gallery</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.outputs.map((data) => {
                            return (
                                <tr key={`gallery-${data.id}`}>
                                    <td><div style={data}></div></td>
                                    <td><Button bsStyle='danger' value={data.id} type='button' onClick={ev => this.handleDelete(ev)}>
                                        Delete
                                    </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            );
        else return null;
    }
}
export default Gallery;