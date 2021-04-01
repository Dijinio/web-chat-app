import React, { useState, useContext } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Avatar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import useStyles from "./styles";
import { AuthContext } from "../../context/auth";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth({ elevation }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const classes = useStyles();
  const history = useHistory();

  const {
    actions: { signin, signup },
    auth: { errorMessage },
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? signup(formData, history) : signin(formData, history);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={classes.root}
      style={{ marginTop: elevation === 0 ? "0" : "100px" }}
    >
      <Paper elevation={elevation} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <Typography variant="h6" style={{ color: "#ed4337" }}>
          {errorMessage}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  label="Name"
                  handleChange={handleChange}
                  autoFocus={isSignup}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              autoFocus={!isSignup}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
