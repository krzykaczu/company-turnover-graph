import type { FunctionComponent } from "react";
import { Comp } from "../comp";
import { parseCompAllData } from "../dashboard/helpers";
import { useQuery } from "@apollo/client";
import type { TurnoverData } from "../types";
import type { WindowSize } from "../../utils/useWindowSize";

export const CompAll: FunctionComponent<{
  size: WindowSize;
  data: TurnoverData | undefined;
}> = ({ size: { width, height }, data }) => {
  return (
    <div style={{ width: `${width / 2}px`, height: `${height}px` }}>
      <Comp data={data ? parseCompAllData(data) : []} />
    </div>
  );
};
