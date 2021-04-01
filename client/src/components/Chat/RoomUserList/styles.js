import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  current: {
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
  },
  others: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
  },
}));
