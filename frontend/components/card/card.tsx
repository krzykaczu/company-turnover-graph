import type { FunctionComponent } from "react";
// @ts-ignore
import { card } from "./card.module.scss";

export const Card: FunctionComponent<{ className: string }> = ({
  className,
  children,
}) => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <div className={`${card} ${className}`}>{children}</div>
    </div>
  );
};
