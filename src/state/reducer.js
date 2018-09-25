let getUniqueId = (outputs) => {
    let unique, id ;
    while (unique !== -1) {
        id = Date.now() + Math.random();
        unique = outputs.findIndex(item => {
            return item.id === id;
        });
    }
    return id;
}

let reducerOutput = (state, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return { ...state, editableOutput: { ...state.editableOutput, backgroundColor: action.color } };
        case 'SET_SIZE':
            return { ...state, editableOutput: { ...state.editableOutput, width: action.size, height: action.size } };
        case 'SET_DORDER':
            return { ...state, editableOutput: { ...state.editableOutput, borderRadius: action.border } };
        case 'SAVE_OUTPUT':
            let id = getUniqueId(state.outputs);
            return { ...state, outputs: [...state.outputs, { ...state.editableOutput, id }] };
        case 'DELETE_OUTPUT':
            let newOutputs = state.outputs.filter(item => item.id !== action.id);
            return { ...state, outputs: newOutputs };
        default:
            return state;
    }
};
export default reducerOutput;