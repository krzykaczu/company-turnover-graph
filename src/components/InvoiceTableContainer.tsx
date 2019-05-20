import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InvoiceTable from './InvoiceTable'

type Props = {
    client: string
}

interface Data {
    invoicesByClient: Array<{ id: string; issueDate: string; net: number; }>;
};

export default ({ client }: Props) => (
    <Query<Data> query={GET_INVOICES_BY_CLIENT} variables={{ client }}>
        {({ data, loading }) => {
            if (loading) return "Loading...";
            return (
                data &&
                data.invoicesByClient &&
                <InvoiceTable data={data.invoicesByClient} />
            );
        }}
    </Query>
);

export const GET_INVOICES_BY_CLIENT = gql`
    query invoicesByClient($client: String!) {
        invoicesByClient(client: $client) {
            id
            issueDate
            net
        }
    }
`;
