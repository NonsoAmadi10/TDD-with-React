import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer Component', () => {
    let container;
    beforeEach(() => container = shallow(<Timer />));

    it('should render a div', () => {
        expect(container.find('section').length).toEqual(1)
    });

    it('should render instances of a Timer button component', () => {
        expect(container.find('TimerButton').length).toEqual(3);
    })
})