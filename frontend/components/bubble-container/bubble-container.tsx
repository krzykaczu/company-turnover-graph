import type { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";

import { Bubble, BubbleData } from "../bubble";
import { GET_CLIENTS_AND_TURNOVERS } from "../../utils/gql-queries";
import Loader from "../loader";
import { useWindowSize } from "../../utils/useWindowSize";
import type { TurnoverByClient, TurnoverData } from "../types";

const linearMappingOfBubblesR = (r: number): number => Math.sqrt(r);

const makeDataD3Ready = ({
  sumOfInvoices,
  client,
}: TurnoverByClient): BubbleData => {
  return {
    r: linearMappingOfBubblesR(sumOfInvoices),
    x: 0,
    y: 0,
    value: sumOfInvoices,
    label: client,
  };
};

export const BubbleContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery<TurnoverData>(
    GET_CLIENTS_AND_TURNOVERS
  );

  const size = useWindowSize();

  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <Bubble
      data={(data?.turnoverByClients || []).map((client: TurnoverByClient) =>
        makeDataD3Ready(client)
      )}
      size={[size.width, size.height]}
    />
  );
};
