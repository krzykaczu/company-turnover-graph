import { FunctionComponent } from "react";
import {
  layout,
  menu,
  dashboard,
  stats,
  progress,
  comp,
  table, // @ts-ignore
} from "./dashboard.module.scss";
import { Card } from "../card";
import { Stats } from "../stats";
import InvoiceTableContainer from "../invoice-table-container";
import { MyResponsiveBar, data } from "../progress";
import { Comp } from "../comp";

export const Dashboard: FunctionComponent = () => {
  return (
    <div className={layout}>
      <div className={menu}></div>
      <div className={dashboard}>
        <Card className={stats}>
          <Stats />
        </Card>
        <Card className={progress}>
          <MyResponsiveBar data={data} />
        </Card>
        <Card className={comp}>
          <Comp data={data} />
        </Card>
        <Card className={table}>
          <InvoiceTableContainer client="ASTER" />
        </Card>
      </div>
    </div>
  );
};
