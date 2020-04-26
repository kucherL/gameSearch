import axios from "axios";

const corsProxy = "https://cors-anywhere.herokuapp.com/";

export const instance = (url, data) =>
  axios({
    url: `${corsProxy}https://api-v3.igdb.com/${url}`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": "fc3b55ff669b5bddd121e58a4b3ec8f9",
    },
    data: `${data}`,
  });
