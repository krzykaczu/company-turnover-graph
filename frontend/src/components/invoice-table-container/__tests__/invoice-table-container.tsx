import React from 'react';
import * as enzyme from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import toJson from 'enzyme-to-json';
import wait from 'waait';
import { BrowserRouter as Router } from 'react-router-dom';

import InvoiceTableContainer from '../invoice-table-container';
import MockComponent from '../../../test-utils/mock-component';
import { GET_INVOICES_BY_CLIENT } from '../../../gql_queries';

jest.mock('../../invoice-table', () => require('../../../test-utils/mock-component').default);

const mocks = [
    {
        request: {
            query: GET_INVOICES_BY_CLIENT,
            variables: {
                client: 'ARCTICAL',
            },
        },
        result: {
            data: {
                invoicesByClient: [
                    {
                        id: 'FAEXP/4/01/2018',
                        issueDate: '22/01/2018',
                        net: 3472,
                    },
                ],
            },
        },
    },
];

test('InvoiceTableContainer snapshot matches', () => {
    const table = enzyme.shallow(<InvoiceTableContainer client={'ARCTICAL'} />);
    expect(toJson(table)).toMatchSnapshot();
});

test('InvoiceTableContainer acquires graphQl data without error', async () => {
    const graphQlWrapper = enzyme.mount(
        <Router>
            <MockedProvider mocks={mocks} addTypename={false}>
                <InvoiceTableContainer client={'ARCTICAL'} />
            </MockedProvider>
        </Router>,
    );

    await wait(0);

    expect(graphQlWrapper.update().find(MockComponent).prop('data')).toMatchObject([
        {
            id: 'FAEXP/4/01/2018',
            issueDate: '22/01/2018',
            net: 3472,
        },
    ]);
});
