import type { FunctionComponent, Dispatch, SetStateAction } from "react";
import { ClientRanksChart } from "../client-ranks-chart";
import { parseCompAllData } from "../dashboard/helpers";
import type { TurnoverData } from "../types";
import type { WindowSize } from "../../utils/useWindowSize";

export const AllClientsRanksChart: FunctionComponent<{
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
    <div style={{ width: `${width / 2}px`, height: `${height}px` }}>
      <ClientRanksChart
        data={data ? parseCompAllData(data, hoveredCustomer) : []}
        setHoveredCustomer={setHoveredCustomer}
      />
    </div>
  );
};
