import utils from '../utils/idGenerator';
import actionTypes from './actions';

const reducerOutput = (state, action) => {
    switch (action.type) {
    case actionTypes.setColor:
        return { ...state, editableOutput: { ...state.editableOutput, backgroundColor: action.color } };
    case actionTypes.setSize:
        return { ...state, editableOutput: { ...state.editableOutput, width: action.size, height: action.size } };
    case actionTypes.setBorder:
        return { ...state, editableOutput: { ...state.editableOutput, borderRadius: action.border } };
    case actionTypes.saveOutput:
        const id = utils.getUniqueId(state.outputs);
        return { ...state, outputs: [...state.outputs, { ...state.editableOutput, id }] };
    case actionTypes.deleteOutput:
        const newOutputs = state.outputs.filter(item => item.id !== action.id);
        return { ...state, outputs: newOutputs };
    default:
        return state;
    }
};
export default reducerOutput;