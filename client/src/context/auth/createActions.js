import * as api from "../../api";

const createActions = (dispatch) => {
  return {
    signup: async (formData, history) => {
      try {
        const { data } = await api.signUp(formData);
        dispatch({ type: "AUTH", payload: data });

        history.push("/");
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data.message });
      }
    },
    signin: async (formData, history) => {
      try {
        const { data } = await api.signIn(formData);
        dispatch({ type: "AUTH", payload: data });

        history.push("/");
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data.message });
      }
    },
    logout: (history) => {
      dispatch({ type: "LOGOUT" });

      history.push("/signin");
    },
  };
};

export default createActions;
