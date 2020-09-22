import React from 'react';
import { Query } from 'react-apollo';
import InvoiceTable from '../InvoiceTable';
import { Props, Data } from './types';
import { GET_INVOICES_BY_CLIENT } from '../../gql_queries';
import Loader from '../loader';

export default ({ client }: Props) => (
    <Query<Data> query={GET_INVOICES_BY_CLIENT} variables={{ client }}>
        {({ data, loading }) => {
            if (loading) return <Loader />;
            return data && data.invoicesByClient && <InvoiceTable data={data.invoicesByClient} />;
        }}
    </Query>
);
