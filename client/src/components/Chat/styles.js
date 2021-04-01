import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import backgroundImage from "../../images/chat-background.jpg";

export default makeStyles((theme) => ({
  root: {
    height: "700px",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "15px",
    marginTop: theme.spacing(5),
    backgroundColor: "#9fa8da",
    border: "1px solid #b5b5b5",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  container: {
    height: "550px",
    marginBottom: "30px",
  },
  messageBox: {
    height: "inherit",
    overflowY: "scroll",
    background: `url(${backgroundImage})`,
    backgroundColor: "#c5cae9",
    backgroundBlendMode: "lighten",
    backgroundSize: "cover",
    borderRadius: "3px",
    boxShadow: "2px 2px 2px rgba(0,0,0,0.7) inset",
  },
  usersBox: {
    height: "inherit",
    overflowY: "auto",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  progress: { height: "50px", maxWidth: "100px", margin: "100px auto" },
}));
