import React from 'react';
import { shallow } from 'enzyme';
import TimeButton from './TimerButton';

describe('TimerButton', () => {
    let container;

    beforeEach(() => container = shallow(
        <TimeButton
            buttonAction={jest.fn()}
            buttonValue={""} />
    ));

    it('should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
})