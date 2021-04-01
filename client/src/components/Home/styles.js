import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    minHeight: "600px",
    marginTop: "150px",
    boxShadow: "5px 5px 20px rgba(0,0,0,0.6)",
    borderRadius: "4px",
  },
  left: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: deepPurple[500],
    color: theme.palette.getContrastText(deepPurple[500]),
    borderRadius: "4px 0 0 4px",
  },
  right: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 4px 4px 0",
  },
  welcomeFirst: {
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    fontWeight: "300",
  },
  welcomeSecond: {
    marginTop: "1em",
    letterSpacing: ".2rem",
    textTransform: "uppercase",
    fontWeight: "800",
  },
}));
