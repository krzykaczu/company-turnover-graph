import gql from "graphql-tag";

export const GET_INVOICES_BY_CLIENT = gql`
    query invoicesByClient($client: String!) {
        invoicesByClient(client: $client) {
            id
            issueDate
            net
        }
    }
`;

export const GET_CLIENTS_AND_TURNOVERS = gql`
    query turnoverByClients {
        turnoverByClients {
            client
            sumOfInvoices
        }
    }
`