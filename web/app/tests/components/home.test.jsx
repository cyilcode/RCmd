import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Home from 'Home';
import AddEditModal from 'add-edit-modal';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { configureStore } from 'configureStore';

describe('Home', () => {
    it('should exists', () => {
        expect(Home).toExist();
    });

    it('should render itself and required components', () => {
        const store = configureStore();
        const lel = shallow(
        <Provider store={store}>
          <Home />
        </Provider>);
    });
});