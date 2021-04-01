import axios from "axios";

// For dev
axios.defaults.baseURL = "http://localhost:5000";

// Auth header
axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
    req.headers.userId = JSON.parse(localStorage.getItem("profile")).result._id;
  }

  return req;
});

// Auth
export const signIn = (formData) => axios.post("/user/signin", formData);
export const signUp = (formData) => axios.post("/user/signup", formData);

// Chat
export const fetchChatRoom = (roomName) => axios.get(`/chatRooms/${roomName}`);
export const fetchRoomNames = () => axios.get("/chatRooms");
