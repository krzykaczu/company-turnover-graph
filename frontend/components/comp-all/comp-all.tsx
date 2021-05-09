import type { FunctionComponent } from "react";
import { Comp } from "../comp";
import { parseCompAllData } from "../dashboard/helpers";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS_AND_TURNOVERS } from "../../utils/gql-queries";
import type { TurnoverData } from "../types";
import {
  compAll, // @ts-ignore
} from "./comp-all.module.scss";
import type { WindowSize } from "../../utils/useWindowSize";

export const CompAll: FunctionComponent<{ size: WindowSize }> = ({
  size: { width, height },
}) => {
  const {
    /* loading: turnoveLoading,
        error: turnoverError, */
    data: turnoverData,
  } = useQuery<TurnoverData>(GET_CLIENTS_AND_TURNOVERS);
  return (
    <div style={{ width: `${width / 2}px`, height: `${height}px` }}>
      <Comp data={turnoverData ? parseCompAllData(turnoverData) : []} />
    </div>
  );
};
