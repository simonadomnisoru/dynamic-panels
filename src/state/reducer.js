import actionTypes from './actions';

let reducerOutput = (state, action) => {
    switch (action.type) {
        case actionTypes.setColor:
            return { ...state, color: action.color };
        case actionTypes.setSize:
            return { ...state, size: action.size };
        case actionTypes.setBorder:
            return { ...state, border: action.border };
        default:
            return state;
    }
};
export default reducerOutput;