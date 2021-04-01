import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useStyles from "./styles";

function RoomUserList({ users, currentUserId }) {
  const classes = useStyles();
  return (
    <>
      <List>
        {users.map((user) => (
          <ListItem button key={user._id}>
            <ListItemIcon>
              <Avatar
                className={
                  currentUserId === user._id ? classes.current : classes.others
                }
              >
                {user.name ? user.name[0] : ""}
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default RoomUserList;
