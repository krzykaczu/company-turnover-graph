import { FunctionComponent } from "react";
import Link from "next/link";
import {
  layout,
  menu,
  dashboard,
  stats,
  progress,
  comp,
  goBack,
  table, // @ts-ignore
} from "./dashboard.module.scss";
import { Card } from "../card";
import { Stats } from "../stats";
import InvoiceTableContainer from "../invoice-table-container";
import { Progress, progressData } from "../progress";
import { Comp } from "../comp";
import {
  GET_INVOICES_BY_CLIENT,
  GET_ALL_INVOICES,
  GET_CLIENTS_AND_TURNOVERS,
} from "../../utils/gql-queries";
import { useQuery } from "@apollo/client";
import { Props, Data } from "../invoice-table-container/types";

type TurnoverByClients = Array<{ client: string; sumOfInvoices: number }>;

export type Data1 = {
  turnoverByClients: TurnoverByClients;
};

const parseCompData = (clientName: string, data: Data1) => {
  const sorted = [...data.turnoverByClients].sort(
    (a, b) => a.sumOfInvoices - b.sumOfInvoices
  );
  const refClient = sorted.find(({ client }) => client === clientName);
  return (
    refClient &&
    sorted
      .slice(sorted.indexOf(refClient) - 3, sorted.indexOf(refClient) + 4)
      .map(({ client, sumOfInvoices }) =>
        client === clientName
          ? { client, compared: sumOfInvoices }
          : { client, other: sumOfInvoices }
      )
  );
};

export const Dashboard: FunctionComponent<{ client: string }> = ({
  client,
}) => {
  const { loading, error, data } = useQuery<{ invoices: Data }>(
    GET_ALL_INVOICES
  );
  const {
    loading: turnoveLoading,
    error: turnoverError,
    data: turnoverData,
  } = useQuery<Data1>(GET_CLIENTS_AND_TURNOVERS);
  // console.log();
  return (
    <div className={layout}>
      <div className={goBack}>
        <Link href="/">⇦ Go Back</Link>
      </div>
      {/* <div className={menu}></div> */}
      <div className={dashboard}>
        <Card className={stats}>
          <Stats />
        </Card>
        <Card className={progress}>
          <Progress data={progressData} />
        </Card>
        <Card className={comp}>
          <Comp
            data={turnoverData ? parseCompData(client, turnoverData) : []}
          />
        </Card>
        <Card className={table}>
          <InvoiceTableContainer client={client} />
        </Card>
      </div>
    </div>
  );
};
