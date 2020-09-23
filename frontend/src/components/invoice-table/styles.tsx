import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
    createStyles({
        paper: {
            /* marginTop: theme.spacing * 3, */
            overflowX: 'auto',
        },
        table: {
            minWidth: '80vw',
        },
        link: {
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, 0.54)',
            '&:visited': {
                color: 'rgba(0, 0, 0, 0.54)',
            },
        },
    });
