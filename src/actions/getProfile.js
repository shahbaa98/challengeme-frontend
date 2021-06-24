import { authorised } from "../request";

export async function getProfile() {
  const API = authorised();

  return await API.request({
    method: "GET",
    url: `/api/v1/users/dj-rest-auth/user/`,
  });
}

