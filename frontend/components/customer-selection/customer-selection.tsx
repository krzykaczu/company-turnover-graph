import type { FunctionComponent } from "react";
import { BubbleContainer } from "../bubble-container";
import { CompAll } from "../comp-all";
import { useWindowSize } from "../../utils/useWindowSize";
import { GET_CLIENTS_AND_TURNOVERS } from "../../utils/gql-queries";
import { useQuery } from "@apollo/client";
import Loader from "../loader";
import {
  customerSelection, // @ts-ignore
} from "./customer-selection.module.scss";
import type { TurnoverData } from "../types";

export const CustomerSelection: FunctionComponent = () => {
  const size = useWindowSize();
  const { loading, error, data } = useQuery<TurnoverData>(
    GET_CLIENTS_AND_TURNOVERS
  );

  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;
  return (
    <div className={customerSelection}>
      <CompAll size={size} data={data} />
      <BubbleContainer size={size} data={data} />
    </div>
  );
};
