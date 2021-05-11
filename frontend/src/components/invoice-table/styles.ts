import { createStyles, StyleRules } from "@material-ui/core";

export const styles = (): StyleRules =>
  createStyles({
    grid: {
      maxHeight: "100%",
    },
    table: {},
    link: {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.54)",
      "&:visited": {
        color: "rgba(0, 0, 0, 0.54)",
      },
    },
  });
