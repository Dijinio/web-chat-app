import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { AuthContext } from "../../context/auth";

function Navbar() {
  const classes = useStyles();
  const {
    auth: { user },
    actions: { logout },
  } = useContext(AuthContext);
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.navLogo}
          variant="h5"
          color="inherit"
          component={Link}
          to="/"
        >
          WEB CHAT
        </Typography>
        {!user.name ? (
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/signin"
          >
            Login
          </Button>
        ) : (
          <>
            <Typography variant="h5" style={{ marginRight: "20px" }}>
              {user.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => logout(history)}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
