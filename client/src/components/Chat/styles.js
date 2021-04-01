import { makeStyles } from "@material-ui/core";
import { deepPurple, red } from "@material-ui/core/colors";
import backgroundImage from "../../images/chat-background.jpg";

const headerHeight = "60px";
const bodyHeight = "550px";

export default makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  },
  root: {
    height: "700px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: deepPurple[400],
    borderRadius: "5px",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      margin: "0 10px",
    },
  },
  left: {
    height: "100%",
    maxWidth: "30%",
    flexBasis: "30%",
    color: theme.palette.getContrastText(deepPurple[400]),
  },
  right: {
    height: "100%",
    maxWidth: "70%",
    flexBasis: "70%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  leftHeader: {
    height: headerHeight,
    margin: "0 5px 0 10px",
    borderBottom: "1px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h6": {
      fontWeight: "300",
    },
  },
  rightHeader: {
    height: headerHeight,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.getContrastText(deepPurple[400]),
    padding: "0 10px",
    "& h5": {
      textTransform: "uppercase",
    },
  },
  leftBody: {
    height: bodyHeight,
    overflowY: "auto",
  },
  rightBody: {
    height: bodyHeight,
    width: "inherit",
    margin: "0 10px",
    overflowY: "auto",
    background: `url(${backgroundImage})`,
    backgroundColor: deepPurple[100],
    backgroundBlendMode: "lighten",
    backgroundSize: "cover",
    borderRadius: "3px",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.7) inset",
  },
  leftFooter: {
    margin: "30px 20px 0 20px",
  },
  rightFooter: {
    backgroundColor: "#fff",
    margin: "20px 10px",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.7) inset",
  },
  logoutButton: {
    backgroundColor: red[600],
    color: "#fff",
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  submitButton: {
    color: theme.palette.getContrastText(deepPurple[400]),
    backgroundColor: deepPurple[500],
    "&:hover": {
      backgroundColor: deepPurple[700],
    },
  },

  progress: { height: "50px", maxWidth: "100px", margin: "100px auto" },
}));
