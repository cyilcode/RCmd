import * as ActionTypes from 'action-types';

export const registryItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_REGISTRY_ITEMS:
            return action.registryItems != undefined ? action.registryItems : state;
        case ActionTypes.START_FETCHING_REGISTRY_ITEMS:
            return {
                state: 'busy'
            };
        case ActionTypes.FETCH_ERROR:
            return {
                state: 'error',
                reason: action.reason
            };
        default:
        return state;
    }
};