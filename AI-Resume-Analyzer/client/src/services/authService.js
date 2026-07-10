import api from "./api";

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const getProfile = (token) =>
  api.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });