import InvoiceTable from "../invoice-table";
import { Props, Data } from "./types";
import { GET_INVOICES_BY_CLIENT } from "../../utils/gql-queries";
import Loader from "../loader";
import { useQuery } from "@apollo/client";

const InvoiceTableContainer = ({ client }: Props) => {
  const { loading, error, data } = useQuery<Data>(GET_INVOICES_BY_CLIENT, {
    variables: {
      client,
    },
  });
  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;
  return <InvoiceTable data={data?.invoicesByClient || []} />;
};
export default InvoiceTableContainer;
