import * as ActionTypes from 'action-types';

export const setRegistryItems = (registryItems) => {
    return {
        type: ActionTypes.SET_REGISTRY_ITEMS,
        registryItems
    };
}

export const startFetchingRegistryItems = () => {
    return {
        type: ActionTypes.START_FETCHING_REGISTRY_ITEMS
    };
};

export const fetchError = (reason) => {
    return {
        type: ActionTypes.FETCH_ERROR,
        reason
    };
};