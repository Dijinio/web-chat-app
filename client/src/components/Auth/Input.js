import React from "react";
import { TextField, Grid } from "@material-ui/core";

function Input({ name, label, handleChange, autoFocus, type }) {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
      />
    </Grid>
  );
}

export default Input;
