import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

import useStyles from "./styles";

function CustomSnackbar({ setSnackbarAlert, snackbarAlert }) {
  const { open, user, text } = snackbarAlert;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarAlert({ ...snackbarAlert, open: false });
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity="success" elevation={6} variant="filled">
          {`${user}: ${text}`}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar;
