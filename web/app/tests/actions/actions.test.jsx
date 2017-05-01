import expect from 'expect';
import * as Actions from 'actions';
import {
    SET_REGISTRY_ITEMS,
    START_FETCHING_REGISTRY_ITEMS,
    FETCH_ERROR
} from 'action-types';

describe('Actions', () => {
    it('should generate setRegistryItems', () => {
        const registryItems = ['itemone', 'itemtwo']
        const action = {
            type: SET_REGISTRY_ITEMS,
            registryItems
        };

        expect(Actions.setRegistryItems(registryItems)).toEqual(action);
    });

    it('should generate startFetchingRegistryItems', () => {
        const action = {
            type: START_FETCHING_REGISTRY_ITEMS
        };

        expect(Actions.startFetchingRegistryItems()).toEqual(action);
    });

    it('should generate fetchError', () => {
        const errorReason = 'test';
        const action = {
            type: FETCH_ERROR,
            reason: errorReason
        };

        expect(Actions.fetchError(errorReason)).toEqual(action);
    });
});
