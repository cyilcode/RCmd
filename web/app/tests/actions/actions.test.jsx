import expect from 'expect';
import * as Actions from 'actions';
import { SET_REGISTRY_ITEMS } from 'action-types';

describe('Actions', () => {
    it('should generate setRegistryItems action', () => {
        const registryItems = ['itemone', 'itemtwo']
        const action = {
            type: SET_REGISTRY_ITEMS,
            registryItems
        };

        const actionGenerated = Actions.setRegistryItems(registryItems);
        expect(actionGenerated).toEqual(action);
    });
});