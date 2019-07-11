import {WithStyles} from "@material-ui/core";
import { styles } from "../styles"

export interface Props extends WithStyles<typeof styles> {
    data: Array<{ id: string, issueDate: string, net: number}>
}