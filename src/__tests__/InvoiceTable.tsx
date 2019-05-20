import React from 'react'
import * as enzyme from 'enzyme';
import InvoiceTable from '../components/InvoiceTable'
import toJson from 'enzyme-to-json'
import { BrowserRouter as Router } from 'react-router-dom';

export const tableMockData = [
    {id: 'FAEXP/5/10/2018', issueDate: '10/10/2018', net: 5000},
    {id: 'FAEXP/4/12/2018', issueDate: '12/12/2018', net: 6000},
]


test('InvoiceTable snapshot matches', () => {
    const table = enzyme.shallow(<InvoiceTable data={tableMockData} />);
    expect(toJson(table)).toMatchSnapshot();
});

test('InvoiceTable renders table properly', () => {
    const table = enzyme.mount(<Router><InvoiceTable data={tableMockData} /></Router>);
    expect(table.find('tbody').exists()).toBe(true);
});

test('InvoiceTable renders props properly', () => {
    const table = enzyme.mount(<Router><InvoiceTable data={tableMockData} /></Router>);
    expect(table.find('th').at(6).text()).toBe('FAEXP/5/10/2018');
});