import type { FunctionComponent } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";

import {
  layout,
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
import { Progress } from "../progress";
import { Comp } from "../comp";
import {
  GET_INVOICES_BY_CLIENT,
  GET_CLIENTS_AND_TURNOVERS,
} from "../../utils/gql-queries";
import {
  turnoverByClient,
  getRank,
  parseProgressData,
  parseCompData,
} from "./helpers";
import type { TurnoverData, InvoicesData } from "../types";

export const Dashboard: FunctionComponent<{ client: string }> = ({
  client,
}) => {
  const { data: invoicesByClient } = useQuery<{
    invoicesByClient: InvoicesData;
  }>(GET_INVOICES_BY_CLIENT, {
    variables: {
      client,
    },
  });
  const {
    /* loading: turnoveLoading,
    error: turnoverError, */
    data: turnoverData,
  } = useQuery<TurnoverData>(GET_CLIENTS_AND_TURNOVERS);
  return (
    <div className={layout}>
      <div className={goBack}>
        <Link href="/">⇦ Go Back</Link>
      </div>
      {/* <div className={menu}></div> */}
      <div className={dashboard}>
        <Card className={stats}>
          <Stats
            turnover={
              turnoverData ? turnoverByClient(client, turnoverData) : null
            }
            rank={turnoverData ? getRank(client, turnoverData) : null}
          />
        </Card>
        <Card className={progress}>
          <Progress
            data={invoicesByClient ? parseProgressData(invoicesByClient) : []}
          />
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
