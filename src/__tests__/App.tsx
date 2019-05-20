import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import * as enzyme from 'enzyme';
import App from '../App'
import InvoiceTableContainer from "../components/InvoiceTableContainer";
import Bubble from "../components/Bubble";
import InvoiceTable from '../components/InvoiceTable'
import { mockData, mockSize } from './Bubble'
import { tableMockData } from './InvoiceTable'

test('React Router snapshot matches', () => {
    const app = enzyme.shallow(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <App/>
            </MemoryRouter>);

    expect(app).toMatchSnapshot();
});

test('React Router "/"', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Route exact path='/' component={ () => <Bubble data={mockData} size={mockSize} />} />
        </MemoryRouter>);
    expect(
        app.contains(<svg width={100} height={100} />)
    ).toBe(true);
});

test('React Router "/" doesn\'t route to "/:client"', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/']}>
            <Route path='/:client' component={() => <InvoiceTable data={tableMockData} />} />
        </MemoryRouter>);
    expect(
        app.contains("FAEXP/5/10/2018")
    ).not.toBe(true);
});

test('React Router "/:somestring" -> renders a component', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/somestring']}>
            <Route path='/:client' component={() => <InvoiceTable data={tableMockData} />} />
        </MemoryRouter>);
    expect(
        app.contains("FAEXP/5/10/2018")
    ).toBe(true);
});