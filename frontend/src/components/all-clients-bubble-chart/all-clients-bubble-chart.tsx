import type { FunctionComponent, Dispatch, SetStateAction } from "react";
import {
  ClientRanksBubbleChart,
  ClientRanksBubbleChartData,
} from "components/client-ranks-bubble-chart";
import type { WindowSize } from "../../utils/useWindowSize";
import type { TurnoverByClient, TurnoverData } from "../types";

const linearMappingOfBubblesR = (r: number): number => Math.sqrt(Math.abs(r));

const makeDataD3Ready = ({
  sumOfInvoices,
  client,
}: TurnoverByClient): ClientRanksBubbleChartData => {
  return {
    r: linearMappingOfBubblesR(sumOfInvoices),
    x: 0,
    y: 0,
    value: sumOfInvoices,
    label: client,
  };
};

export const AllClientsBubbleChart: FunctionComponent<{
  size: WindowSize;
  data: TurnoverData | undefined;
  hoveredCustomer: string;
  setHoveredCustomer: Dispatch<SetStateAction<string>>;
}> = ({
  size: { width, height },
  data,
  hoveredCustomer,
  setHoveredCustomer,
}) => {
  return (
    <ClientRanksBubbleChart
      data={(data?.turnoverByClients || []).map((client: TurnoverByClient) =>
        makeDataD3Ready(client)
      )}
      size={[width / 2, height]}
      hoveredCustomer={hoveredCustomer}
      setHoveredCustomer={setHoveredCustomer}
    />
  );
};
