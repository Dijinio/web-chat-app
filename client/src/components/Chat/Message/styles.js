import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  currentUserMessage: {
    position: "relative",
    maxWidth: "80%",
    margin: "5px 10px",
    borderRadius: "5px",
    padding: "5px 10px",
    backgroundColor: green[300],
    opacity: "0.9",
    alignSelf: "flex-end",
    overflowWrap: "break-word",
  },
  otherUserMessage: {
    position: "relative",
    maxWidth: "80%",
    margin: "5px 10px",
    borderRadius: "5px",
    padding: "5px 10px",
    backgroundColor: blueGrey[300],
    opacity: "0.9",
    alignSelf: "flex-start",
    overflowWrap: "break-word",
  },
  messageHeader: {
    letterSpacing: ".1rem",
  },
  messageBody: {
    fontWeight: "400",
    paddingRight: "50px",
  },
  messageTime: {
    position: "absolute",
    bottom: "3px",
    right: "3px",
    color: theme.palette.text.secondary,
  },
  iframeContainer: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
}));
