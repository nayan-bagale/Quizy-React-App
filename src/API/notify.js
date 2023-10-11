import axios from "axios";

const notify = (token, data) => {
  axios
    .post(import.meta.env.VITE_NOTIFY_URL, {
      title: data.title,
      body: data.body,
      tokens: token,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default notify;
