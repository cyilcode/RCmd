import axios from 'axios';
import * as actions from 'actions';

const GET_REGISTRY_ENDPOINT = 'http://localhost:8080/api/registryitems';

// TODO: Consider using redux-thunk here

export function getRegistryItems(store) {
    store.dispatch(actions.startFetchingRegistryItems());
    axios.get(GET_REGISTRY_ENDPOINT)
    .then((response) => {
        store.dispatch(actions.setRegistryItems({
            items: response.data,
            state: 'success'
        }));
    })
    .catch((err) => {
        store.dispatch(actions.fetchError(err.data));
    });
}