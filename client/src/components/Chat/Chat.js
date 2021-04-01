import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Hidden,
} from "@material-ui/core";
import CustomSnackbar from "../Snackbar/Snackbar";
import { Link, useHistory } from "react-router-dom";
import { ChatContext } from "../../context/chat";
import { AuthContext } from "../../context/auth";
import { initializeSocket } from "../../api/socketInit";
import Home from "../Home/Home";
import Message from "./Message/Message";
import RoomUserList from "./RoomUserList/RoomUserList";
import useStyles from "./styles";

function Chat({ match: { params } }) {
  const classes = useStyles();
  const history = useHistory();
  const {
    chatRoom,
    actions: { updateRoom, joinChat, leaveChat, sendMessage },
  } = useContext(ChatContext);
  const {
    auth: { user },
    actions: { logout },
  } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [snackbarAlert, setSnackbarAlert] = useState({
    user: "",
    text: "",
    open: false,
  });
  const [socket, setSocket] = useState(null);

  const scrollRef = useRef();

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
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

  useEffect(() => {
    setTimeout(() => {
      scrollToEnd();
    }, 100);
  }, [chatRoom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message, chatRoom.name, socket);
    setMessage("");
  };

  if (!user.name) {
    return <Home />;
  }

  if (params?.name !== chatRoom.name) {
    return (
      <div className={classes.progress}>
        <CircularProgress color="secondary" size={60} />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <CustomSnackbar
        snackbarAlert={snackbarAlert}
        setSnackbarAlert={setSnackbarAlert}
      />
      <div className={classes.root}>
        <Hidden xsDown>
          <div className={classes.left}>
            <div className={classes.leftHeader}>
              <Typography variant="h6" align="center">
                People in Room
              </Typography>
            </div>
            <div className={classes.leftBody}>
              <RoomUserList users={chatRoom.users} currentUserId={user._id} />
            </div>
            <div className={classes.leftFooter}>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                component={Link}
                to="/"
              >
                Leave Room
              </Button>
            </div>
          </div>
        </Hidden>
        <div className={classes.right}>
          <div className={classes.rightHeader}>
            <Hidden smUp>
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to="/"
              >
                Leave Room
              </Button>
            </Hidden>
            <Typography variant="h5" color="inherit">
              #{chatRoom.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logoutButton}
              onClick={() => logout(history)}
            >
              Logout
            </Button>
          </div>
          <div className={classes.rightBody}>
            <div className={classes.messagesContainer}>
              {chatRoom.messages.map((message, i) => (
                <Message key={i} {...message} currentUser={user} />
              ))}
              <div
                ref={scrollRef}
                style={{ height: "30px", width: "100%" }}
              ></div>
            </div>
          </div>
          <div className={classes.rightFooter}>
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
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    type="submit"
                    fullWidth
                    className={classes.submitButton}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
