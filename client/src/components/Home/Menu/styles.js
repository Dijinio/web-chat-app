import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    maxWidth: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  seperator: {
    position: "relative",
    textAlign: "center",
    margin: "0.5em",
    width: "100%",
    fontSize: "1.2rem",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      display: "block",
      top: "12px",
      height: "1px",
      width: "40%",
      backgroundColor: "#b5b5b5",
    },
    "&::before": {
      left: "0",
    },
    "&::after": {
      right: "0",
    },
  },
  hello: {
    fontSize: "clamp(2rem, 3vw, 3rem)",
    fontWeight: "300",
  },
}));
