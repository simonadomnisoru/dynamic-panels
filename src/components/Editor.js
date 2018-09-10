import React from 'react';
import store from '../state/store';
import actionTypes from '../state/actions';
import '../styles/App.css';
class Editor extends React.PureComponent {

    onEdit = (ev, field) => {
        switch (field) {
            case 'color':
                store.dispatch({
                    type: actionTypes.setColor,
                    color: ev.target.value
                });
                break;
            case 'size':
                store.dispatch({
                    type: actionTypes.setSize,
                    size: ev.target.value + 'px'
                });
                break;
            case 'border':
                store.dispatch({
                    type: actionTypes.setBorder,
                    border: ev.target.value + 'px'
                });
                break;
        }
    }
    render() {
        return (
            <div className="Editor">
                Color
                <input type="color" onChange={ev => this.onEdit(ev, 'color')} />
                <br />
                Size
                <input type="range" min="0" max="500" onChange={ev => this.onEdit(ev, 'size')} />
                <br />
                Border radius
                <input type="range" min="0" max="50" onChange={ev => this.onEdit(ev, 'border')} />
                <br />
                <input type="button" min="0" max="100" value="Save" />
            </div>
        );
    }
}

export default Editor;
