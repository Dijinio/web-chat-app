import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import CustomSnackbar from "../Snackbar/Snackbar";
import { Link } from "react-router-dom";
import { ChatContext } from "../../context/chat";
import { AuthContext } from "../../context/auth";
import { initializeSocket } from "../../api/socketInit";
import Auth from "../Auth/Auth";
import Message from "./Message/Message";
import useStyles from "./styles";

function Chat({ match: { params } }) {
  const classes = useStyles();
  const {
    chatRoom,
    actions: { updateRoom, joinChat, leaveChat, sendMessage },
  } = useContext(ChatContext);
  const {
    auth: { user },
  } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [snackbarAlert, setSnackbarAlert] = useState({
    user: "",
    text: "",
    open: false,
  });
  const [socket, setSocket] = useState(null);

  const scrollRef = useRef();

  const scrollToEnd = (behavior) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior,
        alignToTop: true,
      });
    }
  };

  useEffect(() => {
    const initSocket = () => {
      const io = initializeSocket();
      setSocket(io);
    };
    initSocket();

    setTimeout(() => {
      scrollToEnd("auto");
    }, 1000);
  }, []);

  useEffect(() => {
    if (params && user.name && socket) {
      joinChat(params.name, socket);
    }
  }, [user, params, socket]);

  useEffect(() => {
    if (socket) {
      updateRoom(socket);
      socket.on("botMessage", (message) => {
        setSnackbarAlert({
          user: message.user,
          text: message.text,
          open: true,
        });
      });

      return () => {
        leaveChat(socket);
      };
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message, chatRoom.name, socket);
    setMessage("");

    setTimeout(() => {
      scrollToEnd("smooth");
    }, 300);
  };

  if (!user.name) {
    return <Auth />;
  }

  if (params?.name !== chatRoom.name) {
    return (
      <div className={classes.progress}>
        <CircularProgress color="secondary" size={60} />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <CustomSnackbar
        snackbarAlert={snackbarAlert}
        setSnackbarAlert={setSnackbarAlert}
      />
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h5" align="center" gutterBottom>
            People in chat
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" align="center" gutterBottom>
            #{chatRoom.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={4} className={classes.usersBox}>
          <List>
            {chatRoom.users.map((u) => (
              <ListItem button key={u._id}>
                <ListItemIcon>
                  <Avatar className={classes.orange}>
                    {u.name ? u.name[0] : ""}
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={u.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={8} className={classes.messageBox}>
          {chatRoom.messages.map((message, i) => (
            <Message key={i} {...message} currentUser={user} />
          ))}
          <div ref={scrollRef} style={{ height: "30px", width: "100%" }}></div>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end">
        <Grid item xs={4} align="center">
          <Button component={Link} to="/" variant="contained" color="secondary">
            Leave the Room
          </Button>
        </Grid>
        <Grid item xs={8}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              className={classes.input}
            >
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  placeholder="type a message"
                  autoFocus
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
