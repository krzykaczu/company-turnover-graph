import { Query, QueryResult } from "react-apollo";

import InvoiceTable from "../invoice-table";
import { Props, Data } from "./types";
import { GET_INVOICES_BY_CLIENT } from "../../gql_queries";
import Loader from "../loader";

export default ({ client }: Props) => (
  <Query<Data> query={GET_INVOICES_BY_CLIENT} variables={{ client }}>
    {(result: QueryResult) => {
      const { data, loading } = result;
      if (loading) return <Loader />;
      return (
        data &&
        data.invoicesByClient && <InvoiceTable data={data.invoicesByClient} />
      );
    }}
  </Query>
);
