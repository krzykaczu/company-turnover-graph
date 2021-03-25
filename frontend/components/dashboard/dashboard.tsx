import { FunctionComponent } from "react";
// @ts-ignore
import { layout, menu, dashboard } from "./dashboard.module.scss";
import { Card } from "../card";

export const Dashboard: FunctionComponent = () => {
  return (
    <div className={layout}>
      <div className={menu}></div>
      <div className={dashboard}>
        <Card />
      </div>
    </div>
  );
};
