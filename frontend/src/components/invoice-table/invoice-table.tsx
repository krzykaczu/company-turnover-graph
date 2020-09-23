import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as React from 'react';

import { formatInPLN } from '../../utils/helpers';
import { Props } from './types';
import { styles } from './styles';

const InvoiceTable = (props: Props) => {
    const { classes, data } = props;
    const rows = data.map((inv, index) => {
        const id = index + 1;
        return { id: id, invoiceId: inv.id, issueDate: inv.issueDate, netAmount: inv.net };
    });

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Paper className={classes.paper}>
                    <Table className={classes.table} padding="default">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Link to="/" className={classes.link}>
                                        ⇦ Go Back
                                    </Link>
                                </TableCell>
                                <TableCell />
                                <TableCell />
                            </TableRow>
                            <TableRow>
                                <TableCell>Invoice number</TableCell>
                                <TableCell align={'right'}>Date of issue</TableCell>
                                <TableCell align={'right'}>Net amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.invoiceId}
                                        </TableCell>
                                        <TableCell align={'right'}>{row.issueDate}</TableCell>
                                        <TableCell align={'right'}>{formatInPLN(row.netAmount)}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(InvoiceTable);
