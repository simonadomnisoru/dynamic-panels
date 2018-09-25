import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/App.css';

const Output = (props) => {
    if (props) {
        return (
            <Panel>
                <Panel.Heading>Output</Panel.Heading>
                <Panel.Body> <div style={props.style}></div></Panel.Body>
            </Panel>);
    }
    else return null;
};

Output.propTypes = {
    style: PropTypes.object
};

function mapStateToProps(state) {
    return {
        style: state.editableOutput,
    };
};

export default connect(mapStateToProps)(Output);