import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { fetchRoomNames } from "../../api/";
import { AuthContext } from "../../context/auth";
import Auth from "../Auth/Auth";
import useStyles from "./styles";
import Menu from "./Menu/Menu";
import { useHistory } from "react-router-dom";

function Home() {
  const classes = useStyles();
  const [rooms, setRooms] = useState([]);
  const history = useHistory();

  const {
    auth: { user },
    actions: { logout },
  } = useContext(AuthContext);

  const getRoomNames = async () => {
    try {
      const {
        data: { rooms },
      } = await fetchRoomNames();
      setRooms(rooms);
    } catch (error) {}
  };

  useEffect(() => {
    if (user.name) {
      getRoomNames();
    }
  }, [user]);

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Grid container spacing={0} className={classes.root}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} className={classes.left}>
              <div>
                <Typography variant="h4" className={classes.welcomeFirst}>
                  welcome to the
                </Typography>
                <Typography variant="h4" className={classes.welcomeSecond}>
                  web chat
                </Typography>
              </div>
              {user.name && (
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.logoutButton}
                  onClick={() => logout(history)}
                >
                  Logout
                </Button>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} className={classes.right}>
              {user.name ? (
                <Menu rooms={rooms} user={user} />
              ) : (
                <Auth elevation={0} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
