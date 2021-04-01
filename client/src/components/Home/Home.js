import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { fetchRoomNames } from "../../api/";
import { AuthContext } from "../../context/auth";
import { useHistory } from "react-router-dom";
import Auth from "../Auth/Auth";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();
  const {
    auth: { user },
  } = useContext(AuthContext);

  const getRoomNames = async () => {
    try {
      const {
        data: { rooms },
      } = await fetchRoomNames();
      setRooms(rooms);
      setSelectedRoom(rooms[0]);
    } catch (error) {}
  };

  useEffect(() => {
    if (user.name) {
      getRoomNames();
    }
  }, [user]);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleNewRoomChange = (e) => {
    setNewRoom(e.target.value);
  };

  const handleSubmit = () => {
    const room = newRoom ? newRoom : selectedRoom;
    history.push(`/chatRooms/${room}`);
  };

  if (!user.name) {
    return <Auth />;
  }

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", height: "50vh", marginTop: "100px" }}
    >
      <Paper elevation={1} style={{ padding: "50px 20px" }}>
        <Typography variant="h4" align="center">
          Hello {user.name}
        </Typography>
        <Typography variant="h4" align="center">
          Welcome to Chat app!
        </Typography>
        <div style={{ marginTop: "100px" }}>
          <Typography variant="h6" align="center">
            Select the room
          </Typography>
          <FormControl variant="outlined" style={{ width: "50%" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedRoom}
              onChange={handleRoomChange}
            >
              {rooms.map((room) => (
                <MenuItem key={room} value={room}>
                  {room}
                </MenuItem>
              ))}
            </Select>
            <Typography
              variant="h6"
              align="center"
              style={{ margin: "10px 0" }}
            >
              or create a new one
            </Typography>
            <TextField
              value={newRoom}
              onChange={handleNewRoomChange}
              label="Room name"
              variant="outlined"
              onKeyPress={(e) => (e.key === "Enter" ? handleSubmit() : null)}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              size="large"
              onClick={handleSubmit}
            >
              {newRoom ? "Create new room" : "Join Room"}
            </Button>
          </FormControl>
        </div>
      </Paper>
    </Container>
  );
}

export default Home;
