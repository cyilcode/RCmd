import * as redux from 'redux';
import { registryItemsReducer } from 'reducers';

export let configureStore = (initialState = {}) => {
    let reducer = redux.combineReducers({
        registryItems: registryItemsReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};