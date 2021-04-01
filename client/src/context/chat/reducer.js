const chatReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ROOM":
      return action.payload.result;
    case "UPDATE_ROOM":
      return action.payload.updatedRoom;
    default:
      return state;
  }
};

export default chatReducer;
