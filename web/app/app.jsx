import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as actions from 'actions';
import axios from 'axios';
import Home from 'Home';
import { configureStore } from 'configureStore';

let store = configureStore();
axios.get('http://localhost:8080/api/registryitems').then((response) => {
  store.dispatch(actions.setRegistryItems(response.data))
});

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
