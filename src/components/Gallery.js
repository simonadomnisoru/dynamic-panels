import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { deleteOutput } from '../state/dispatchers';
import { connect } from 'react-redux';
class Gallery extends React.PureComponent {
    handleDelete = (ev) => {
        deleteOutput(parseFloat(ev.target.value));
    }

    renderBody = () => {
        return this.props.outputs.map((data) => {
            return (
                <tr key={`gallery-${data.id}`}>
                    <td><div style={data}></div></td>
                    <td>
                        <Button bsStyle='danger' value={data.id} type='button' onClick={ev => this.handleDelete(ev)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
    }
    render() {
        if (this.props && this.props.outputs)
            return (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Gallery</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBody()}
                    </tbody>
                </Table>
            );
        else return null;
    }
};

Gallery.propTypes = {
    outputs: PropTypes.array
};

function mapStateToProps(state) {
    return {
        outputs: state.outputs,
    };
};

export default connect(mapStateToProps)(Gallery);
