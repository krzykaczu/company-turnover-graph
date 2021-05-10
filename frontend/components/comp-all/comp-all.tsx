import type { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Comp } from "../comp";
import { parseCompAllData } from "../dashboard/helpers";
import type { TurnoverData } from "../types";
import type { WindowSize } from "../../utils/useWindowSize";

export const CompAll: FunctionComponent<{
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
      <Comp
        data={data ? parseCompAllData(data, hoveredCustomer) : []}
        setHoveredCustomer={setHoveredCustomer}
      />
    </div>
  );
};
