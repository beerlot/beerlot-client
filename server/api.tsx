import axios from "axios";

export const axiosTest = () => {
  axios
    .get("/api/v1/beers/1")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
