import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    minHeight: "600px",
    boxShadow: "5px 5px 20px rgba(0,0,0,0.6)",
    borderRadius: "4px",
  },
  left: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: deepPurple[500],
    color: theme.palette.getContrastText(deepPurple[500]),
    borderRadius: "4px 0 0 4px",
  },
  right: {
    height: "100%",
    width: "100%",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 4px 4px 0",
  },
  welcomeFirst: {
    textAlign: "center",
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
  },
  welcomeSecond: {
    textAlign: "center",
    marginTop: "1em",
    letterSpacing: ".2rem",
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.3em",
    },
  },
  logoutButton: {
    fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
    fontWeight: "300",
  },
}));
