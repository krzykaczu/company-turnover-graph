import { FunctionComponent } from "react";
// @ts-ignore
import { statItem, big, heading, spacing } from "./stats.module.scss";

export const Stats: FunctionComponent<{
  turnover: number | null | undefined;
  rank: number | null | undefined;
}> = ({ turnover, rank }) => {
  return (
    <>
      <span className={`${statItem} ${big}`}>#{rank}</span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Monthly</div>
        <div>{turnover && (turnover / 12).toFixed(2)}</div>
      </span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Annual revenue</div>
        <div>{turnover}</div>
      </span>
    </>
  );
};
