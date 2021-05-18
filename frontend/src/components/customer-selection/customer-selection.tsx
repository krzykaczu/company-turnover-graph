import { FunctionComponent, useState } from "react";
import { AllClientsBubbleChart } from "../all-clients-bubble-chart";
import { AllClientsRanksChart } from "../all-clients-ranks-chart";
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
  const [hoveredCustomer, setHoveredCustomer] = useState<string>("");
  const { loading, error, data } = useQuery<TurnoverData>(
    GET_CLIENTS_AND_TURNOVERS
  );

  if (loading) return <Loader />;
  if (error) return <div>{`Error! ${error.message}`}</div>;
  return (
    <div className={customerSelection}>
      <AllClientsRanksChart
        size={size}
        data={data}
        hoveredCustomer={hoveredCustomer}
        setHoveredCustomer={setHoveredCustomer}
      />
      <AllClientsBubbleChart
        size={size}
        data={data}
        hoveredCustomer={hoveredCustomer}
        setHoveredCustomer={setHoveredCustomer}
      />
    </div>
  );
};
