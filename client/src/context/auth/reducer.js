const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { errorMessage: "", user: action.payload.result };
    case "SIGNED":
      const { result } = JSON.parse(action.payload);
      return { errorMessage: "", user: result };
    case "LOGOUT":
      localStorage.clear();
      return { errorMessage: "", user: { _id: "", name: "", email: "" } };
    case "ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
