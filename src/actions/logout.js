import { authorised } from "../request";

export async function logout() {
    const API = authorised();

  return await API.request({
    method: "POST",
    url: `api/v1/users/dj-rest-auth/logout/`,
  });
}
