import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer, {
    editableOutput: {
        'backgroundColor': '#000000',
        'width': '50px',
        'height': '50px',
        'borderRadius': '50%'
    }, outputs: []
});
persistStore(store);

export default store;