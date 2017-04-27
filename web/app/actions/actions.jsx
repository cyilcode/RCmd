import * as ActionTypes from 'action-types';

export var setRegistryItems = (registryItems) => {
    return {
        type: ActionTypes.SET_REGISTRY_ITEMS,
        registryItems
    };
}