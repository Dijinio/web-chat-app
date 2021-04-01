import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

function Menu({ rooms, user }) {
  const classes = useStyles();
  const history = useHistory();

  const [selectedRoom, setSelectedRoom] = useState("");
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    rooms.length > 0 && setSelectedRoom(rooms[0]);
  }, [rooms]);

  const handleRoomEnter = () => {
    newRoom
      ? history.push(`/chatRooms/${newRoom}`)
      : history.push(`/chatRooms/${selectedRoom}`);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h3" align="center" style={{ fontWeight: "300" }}>
        Hello {user.name}
      </Typography>
      <Typography variant="h6" align="center" style={{ marginTop: "30px" }}>
        Select The Room
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              {rooms.map((room) => (
                <MenuItem key={room} value={room}>
                  {room}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleRoomEnter}
          >
            Join Room
          </Button>
        </Grid>
        <p className={classes.seperator}>or</p>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Create a new one
          </Typography>
          <TextField
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
            label="Room name"
            variant="outlined"
            fullWidth
            onKeyPress={(e) => (e.key === "Enter" ? handleRoomEnter() : null)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRoomEnter}
          >
            Create new room
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Menu;
