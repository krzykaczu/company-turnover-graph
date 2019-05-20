import React from 'react'
import * as enzyme from 'enzyme';
import Bubble from '../components/Bubble'
import toJson from 'enzyme-to-json'
import { BrowserRouter as Router } from 'react-router-dom';

export const mockData = [
    {
        "label": "BEETROOT SE",
        "r": 121.13628688382354,
        "value": 14674,
        "x": 0,
        "y": 0,
    },
    {
        "label": "GREEN",
        "r": 89.48184173339304,
        "value": 8007,
        "x": 0,
        "y": 0,
    }
]

export const mockSize = [100,100]

test('Bubble snapshot matches', () => {
    const bubble = enzyme.shallow(<Bubble data={mockData} size={mockSize} />);
    expect(toJson(bubble)).toMatchSnapshot();
});

test('Bubble renders svg properly', () => {
    const bubble = enzyme.mount(<Router><Bubble data={mockData} size={mockSize} /></Router>);
    expect(bubble.find('svg').exists()).toBe(true);
});
