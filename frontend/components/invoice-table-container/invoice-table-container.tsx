import InvoiceTable from "../invoice-table";
import { Props, Data } from "./types";
import {
  GET_INVOICES_BY_CLIENT,
  GET_ALL_INVOICES,
} from "../../utils/gql-queries";
import Loader from "../loader";
import { useQuery } from "@apollo/client";

const InvoiceTableContainer = ({ client }: Props) => {
  /**
   * Version 1 - dynamically fetched data
   */
  /* const { loading, error, data } = useQuery<{ invoicesByClient: Data }>(
    GET_INVOICES_BY_CLIENT,
    {
      variables: {
        client,
      },
    }
  );
  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;
  return <InvoiceTable data={data?.invoicesByClient || []} />; */
  /**
   * Version 2 - data pre-fetched at SSG time
   */
  const { loading, error, data } = useQuery<{ invoices: Data }>(
    GET_ALL_INVOICES
  );
  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;
  return (
    <InvoiceTable
      data={
        data?.invoices?.filter((invoice) => invoice.client === client) || []
      }
    />
  );
};
export default InvoiceTableContainer;
