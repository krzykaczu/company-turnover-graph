import { WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import type { InvoicesData } from "../types";

export interface Props extends WithStyles<typeof styles> {
  data: InvoicesData;
}
