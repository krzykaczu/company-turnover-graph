import Bubble from "../bubble";
import { GET_CLIENTS_AND_TURNOVERS } from "../../utils/gql-queries";
import Loader from "../loader";
import { useQuery } from "@apollo/client";
import { useWindowSize } from "../../utils/useWindowSize";

const linearMappingOfBubblesR = (r: number): number => Math.sqrt(r);

export type Data = {
  turnoverByClients: Array<{ client: string; sumOfInvoices: number }>;
};

const makeDataD3Ready = (data: { client: string; sumOfInvoices: number }) => {
  return {
    r: linearMappingOfBubblesR(data.sumOfInvoices),
    x: 0,
    y: 0,
    value: data.sumOfInvoices,
    label: data.client,
  };
};

const BubbleContainer = () => {
  const { loading, error, data } = useQuery<Data>(GET_CLIENTS_AND_TURNOVERS);

  const size = useWindowSize();

  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <Bubble
      data={(data?.turnoverByClients || []).map((client: any) =>
        makeDataD3Ready(client)
      )}
      size={[size.width, size.height]}
    />
  );
};

export default BubbleContainer;
