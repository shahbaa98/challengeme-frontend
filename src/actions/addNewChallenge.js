import { authorised, } from "../request";

export async function addNewChallenge(data) {
  const API = authorised();

  return await API.request({
    method: "POST",
    url: `/api/v1/teacher/challanges`,
    data,
  });
}
