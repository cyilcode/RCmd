import * as ActionTypes from 'action-types';

export let registryItemsReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_REGISTRY_ITEMS:
            return action.registryItems != undefined ? action.registryItems : state;
        default:
        return state;
    }
};