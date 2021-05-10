import type { FunctionComponent } from "react";
import { Bubble, BubbleData } from "../bubble";
import type { WindowSize } from "../../utils/useWindowSize";
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

export const BubbleContainer: FunctionComponent<{
  size: WindowSize;
  data: TurnoverData | undefined;
}> = ({ size: { width, height } }, data) => {
  return (
    <Bubble
      data={(data?.turnoverByClients || []).map((client: TurnoverByClient) =>
        makeDataD3Ready(client)
      )}
      size={[width / 2, height]}
    />
  );
};
