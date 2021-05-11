import type { FunctionComponent } from "react";
// @ts-ignore
import { statItem, big, heading, spacing } from "./stats.module.scss";
import { formatInPLN } from "../../utils/helpers";

export interface StatsProps {
  turnover: number | null | undefined;
  rank: number | null | undefined;
}

export const Stats: FunctionComponent<StatsProps> = ({ turnover, rank }) => {
  return (
    <>
      <span className={`${statItem} ${big}`}>#{rank}</span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Monthly</div>
        <div>{turnover && formatInPLN(Number((turnover / 12).toFixed(2)))}</div>
      </span>
      <span className={spacing} />
      <span className={statItem}>
        <div className={heading}>Annual revenue</div>
        <div>{formatInPLN(Number(turnover))}</div>
      </span>
    </>
  );
};
