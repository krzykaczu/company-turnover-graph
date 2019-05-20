import {
    createStyles,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    withStyles,
    WithStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { formatInPLN } from '../utils/formatInPLN'
import * as React from 'react';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: '80vw'
        },
        link: {
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, 0.54)',
            '&:visited': {
                color: 'rgba(0, 0, 0, 0.54)'
            }
        }
    });

interface Props extends WithStyles<typeof styles> {
    data: Array<{ id: string, issueDate: string, net: number}>
}

const InvoiceTable = (props: Props) => {
    const { classes, data } = props;
    const rows = data.map((inv, index) => {
        const id = index+1
        return { id: id, invoiceId: inv.id, issueDate: inv.issueDate, netAmount: inv.net}
    })

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
        <Grid item>
        <Paper className={classes.paper}>
            <Table className={classes.table} padding="dense">
                <TableHead>
                    <TableRow>
                        <TableCell><Link to="/" className={classes.link}>⇦ Go Back</Link></TableCell>
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
                    {rows.map(row => {
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