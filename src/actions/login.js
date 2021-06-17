import { notAuthorised } from "../request";

export async function login(email, password) {
  const API = notAuthorised;

  return await API.request({
    method: "POST",
    url: `/api/v1/users/auth/login/`,
    data: {
      email,
      password,
    },
  });
}
