import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import * as enzyme from 'enzyme';
import ReactDOM from 'react-dom';

import App from '../app';
import Bubble from '../../bubble';
import InvoiceTable from '../../invoice-table';
import { mockData, mockSize, tableMockData } from '../../../test-utils/test-helpers';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('React Router snapshot matches', () => {
    const app = enzyme.shallow(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <App />
        </MemoryRouter>,
    );

    expect(app).toMatchSnapshot();
});

test('React Router "/"', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Route exact path="/" component={() => <Bubble data={mockData} size={mockSize} />} />
        </MemoryRouter>,
    );
    expect(app.contains(<svg width={100} height={100} />)).toBe(true);
});

test('React Router "/" doesn\'t route to "/:client"', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/']}>
            <Route path="/:client" component={() => <InvoiceTable data={tableMockData} />} />
        </MemoryRouter>,
    );
    expect(app.contains('FAEXP/5/10/2018')).not.toBe(true);
});

test('React Router "/:somestring" -> renders a component', () => {
    const app = enzyme.mount(
        <MemoryRouter initialEntries={['/somestring']}>
            <Route path="/:client" component={() => <InvoiceTable data={tableMockData} />} />
        </MemoryRouter>,
    );
    expect(app.contains('FAEXP/5/10/2018')).toBe(true);
});
