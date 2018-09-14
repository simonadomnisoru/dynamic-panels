let reducerOutput = (state, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return { ...state, editableOutput: { ...state.editableOutput, color: action.color } };
        case 'SET_SIZE':
            return { ...state, editableOutput: { ...state.editableOutput, size: action.size } };
        case 'SET_DORDER':
            return { ...state, editableOutput: { ...state.editableOutput, border: action.border } };
        case 'SAVE_OUTPUT':
            return { ...state, outputs: [...state.outputs, state.editableOutput] };
        default:
            return state;
    }
};
export default reducerOutput;