import axios from "axios";

const notify = (token) => {
  axios
    .post(
      import.meta.env.VITE_NOTIFY_URL || "http://localhost:5000/api/notify",
      {
        title: "Fred",
        body: "Flintstone",
        token: token,
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default notify;
