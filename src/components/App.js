import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Editor from './Editor';
import Output from './Output';
import Gallery from './Gallery';
import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <Editor />
                    </Col>
                    <Col xs={12} md={6}>
                        <Output />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Gallery />
                    </Col>
                </Row>

            </Grid>
        </div>
    );
};

export default App;
