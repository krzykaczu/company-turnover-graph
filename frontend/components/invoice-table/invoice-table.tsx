import type { FunctionComponent } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

import { formatInPLN } from "../../utils/helpers";
import { Props } from "./types";
import { styles } from "./styles";

const InvoiceTable: FunctionComponent<Props> = (props: Props) => {
  const { classes, data } = props;
  const rows = data.map(({ id, issueDate, net }, index) => {
    return {
      id: index + 1,
      invoiceId: id,
      issueDate: issueDate,
      netAmount: net,
    };
  });

  return (
    <Grid
      className={classes.grid}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Table className={classes.table} padding="default">
          <TableHead>
            <TableRow>
              <TableCell>Invoice number</TableCell>
              <TableCell align={"right"}>Date of issue</TableCell>
              <TableCell align={"right"}>Net amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.invoiceId}
                  </TableCell>
                  <TableCell align={"right"}>{row.issueDate}</TableCell>
                  <TableCell align={"right"}>
                    {formatInPLN(row.netAmount)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(InvoiceTable);
