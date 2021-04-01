const createActions = (dispatch) => {
  return {
    joinChat: (roomName, socket) => {
      try {
        socket.open();
        socket.emit("join", roomName);
      } catch (error) {
        console.log(error);
      }
    },
    updateRoom: (socket) => {
      try {
        socket.on("updateRoom", (updatedRoom) => {
          dispatch({ type: "UPDATE_ROOM", payload: updatedRoom });
        });
      } catch (error) {
        console.log(error);
      }
    },
    leaveChat: (socket) => {
      try {
        socket.disconnect();
        socket.off();
      } catch (error) {
        console.log(error);
      }
    },
    sendMessage: (message, roomName, socket) => {
      socket.emit("sendMessage", { message, roomName });
    },
  };
};

export default createActions;
