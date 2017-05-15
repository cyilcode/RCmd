import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Error from 'error';
import { shallow } from 'enzyme';

describe('Error', () => {
    it('should exists', () => {
        expect(Error).toExist();
    });

    it('should render correct error messages', () => {
        const component = shallow(<Error reason="test" />)
    });
});