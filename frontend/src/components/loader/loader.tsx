import type { FunctionComponent } from "react";
// @ts-ignore
import { center, dot1, dot2, dot3 } from "./loader.module.scss";

const Loader: FunctionComponent = () => {
  return (
    <div className={center}>
      <div className={dot1} />
      <div className={dot2} />
      <div className={dot3} />
    </div>
  );
};

export default Loader;
