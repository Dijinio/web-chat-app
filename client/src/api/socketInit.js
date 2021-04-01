import { io } from "socket.io-client";

const getProfile = (property) => {
  if (localStorage.getItem("profile")) {
    return JSON.parse(localStorage.getItem("profile"))[property];
  } else {
    return "";
  }
};

// for DEV
// export const initializeSocket = () => {
//   const socket = io("http://localhost:5000", {
//     allowCredentials: true,
//     extraHeaders: {
//       token: `Bearer ${getProfile("token")}`,
//       userProfile: JSON.stringify(getProfile("result")),
//     },
//   });
//   return socket;
// };

// Production
export const initializeSocket = () => {
  const socket = io({
    allowCredentials: true,
    extraHeaders: {
      token: `Bearer ${getProfile("token")}`,
      userProfile: JSON.stringify(getProfile("result")),
    },
  });
  return socket;
};
