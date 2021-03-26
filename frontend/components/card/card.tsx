import { FunctionComponent } from "react";
// @ts-ignore
import { card } from "./card.module.scss";

export const Card: FunctionComponent<{ className: string }> = ({
  className,
}) => {
  return <p className={`${card} ${className}`}>dupa</p>;
};
