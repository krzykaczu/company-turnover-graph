import { FunctionComponent } from "react";
// @ts-ignore
import { statItem, big, heading, spacing } from "./stats.module.scss";

export const Stats: FunctionComponent = () => {
  return (
    <>
      <span className={`${statItem} ${big}`}>#1</span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Monthly</div>
        <div>12345</div>
      </span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Annual revenue</div>
        <div>123456</div>
      </span>
    </>
  );
};
