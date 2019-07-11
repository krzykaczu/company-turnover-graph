import React from 'react'
import * as enzyme from 'enzyme';
import InvoiceTable from '../InvoiceTable'
import toJson from 'enzyme-to-json'
import { BrowserRouter as Router } from 'react-router-dom';
import { tableMockData } from '../../../test-utils/testHelpers'

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