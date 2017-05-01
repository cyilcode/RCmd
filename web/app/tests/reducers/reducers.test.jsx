import expect from 'expect';
import * as Reducers from 'reducers';
import {
    SET_REGISTRY_ITEMS,
    START_FETCHING_REGISTRY_ITEMS,
    FETCH_ERROR
} from 'action-types';

describe('Reducers', () => {
    describe('registryItemsReducer', () => {
        it('should set registryItems', () => {
            const state = {
                test: 'ok'
            };

            const action = {
                type: SET_REGISTRY_ITEMS,
                registryItems: state
            }

            expect(Reducers.registryItemsReducer({}, action)).toEqual(state);
        });

        it('should set state to busy when start fetching data from the server', () => {
            const state = {
                state: 'busy'
            };

            const action = {
                type: START_FETCHING_REGISTRY_ITEMS
            };

            expect(Reducers.registryItemsReducer({}, action)).toEqual(state);
        });

        it('should set state to error and add reason when an error occurs on the server side', () => {
            const state = {
                state: 'error',
                reason: 'idk'
            };

            const action = {
                type: FETCH_ERROR,
                reason: state.reason
            }

            expect(Reducers.registryItemsReducer({}, action)).toEqual(state);
        });
    });
});