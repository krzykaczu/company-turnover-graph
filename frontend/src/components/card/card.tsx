import type { FunctionComponent } from "react";
// @ts-ignore
import { card } from "./card.module.scss";

export const Card: FunctionComponent<{ className: string }> = ({
  className,
  children,
}) => {
  return <div className={`${card} ${className}`}>{children}</div>;
};
