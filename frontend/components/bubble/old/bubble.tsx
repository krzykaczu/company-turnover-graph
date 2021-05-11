import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';

import Bubble from '../bubble';
import { mockData, mockSize } from '../../../test-utils/test-helpers';

test('Bubble snapshot matches', () => {
    const bubble = enzyme.shallow(<Bubble data={mockData} size={mockSize} />);
    expect(toJson(bubble)).toMatchSnapshot();
});

test('Bubble renders svg properly', () => {
    const bubble = enzyme.mount(
        <Router>
            <Bubble data={mockData} size={mockSize} />
        </Router>,
    );
    expect(bubble.find('svg').exists()).toBe(true);
});
