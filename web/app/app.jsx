import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as actions from 'actions';
import axios from 'axios';
import Home from 'Home';
import { configureStore } from 'configureStore';
import * as API from 'registry-api';

let store = configureStore();
API.getRegistryItems(store);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
