import React from 'react';
import { BlockPicker } from 'react-color';
import { Button, FormControl, ControlLabel, Panel } from 'react-bootstrap';
import { setColorDispatcher, setSizeDispatcher, setBorderDispatcher, saveOutput } from '../state/dispatchers';
import '../styles/App.css';

class Editor extends React.PureComponent {
    onEdit = (ev, field, color) => {
        switch (field) {
        case 'color':
            setColorDispatcher(color.hex);
            break;
        case 'size':
            setSizeDispatcher(ev.target.value + 'px');
            break;
        case 'border':
            setBorderDispatcher(ev.target.value + '%');
            break;
        }
    }

    onSave = () => {
        saveOutput();
    }
    render() {
        return (
            <Panel className="Editor">
                <Panel.Heading>Editor</Panel.Heading>
                <Panel.Body> <ControlLabel>Color</ControlLabel>
                    <BlockPicker onChangeComplete={(color, event) => this.onEdit(event, 'color', color)} />
                    <ControlLabel>Size</ControlLabel>
                    <FormControl type="range" componentClass='input' min="1" max="100" onChange={ev => this.onEdit(ev, 'size')} />
                    <ControlLabel>Border radius</ControlLabel>
                    <FormControl type="range" componentClass='input' min="0" max="100" onChange={ev => this.onEdit(ev, 'border')} />
                    <Button bsStyle="primary" type="button" min="0" max="100" value="Save" onClick={() => this.onSave()}>Save</Button></Panel.Body>
            </Panel>
        );
    }
}

export default Editor;
