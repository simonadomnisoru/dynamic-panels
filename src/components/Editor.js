import React from 'react';
import { setColorDispatcher, setSizeDispatcher, setBorderDispatcher, saveOutput } from '../state/dispatchers';
import { Button } from 'react-bootstrap';
import '../styles/App.css';

class Editor extends React.PureComponent {

    onEdit = (ev, field) => {
        switch (field) {
            case 'color':
                setColorDispatcher(ev.target.value);
                break;
            case 'size':
                setSizeDispatcher(ev.target.value + '%');
                break;
            case 'border':
                setBorderDispatcher(ev.target.value + 'px');
                break;
        }
    }

    onSave = () => {
        saveOutput();
    }
    render() {
        return (
            <div className="Editor">
                Color
                <input type="color" onChange={ev => this.onEdit(ev, 'color')} />
                <br />
                Size
                <input type="range" min="1" max="100" onChange={ev => this.onEdit(ev, 'size')} />
                <br />
                Border radius
                <input type="range" min="0" max="100" onChange={ev => this.onEdit(ev, 'border')} />
                <br />
                <Button bsStyle="primary" type="button" min="0" max="100" value="Save" onClick={() => this.onSave()}>Save</Button>
            </div>
        );
    }
}

export default Editor;
