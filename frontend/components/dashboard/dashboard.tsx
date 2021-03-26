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

export const Dashboard: FunctionComponent = () => {
  return (
    <div className={layout}>
      <div className={menu}></div>
      <div className={dashboard}>
        <Card className={stats} />
        <Card className={progress} />
        <Card className={comp} />
        <Card className={table} />
      </div>
    </div>
  );
};
