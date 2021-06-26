import axios from "axios";
import { AUTH_TOKEN } from "./contexts/UserContext";

const config = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const notAuthorised = axios.create(config);

export function authorised() {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    throw new Error("Not Authorized");
  }

  return axios.create({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Token ${token}`,
    },
  });
}
