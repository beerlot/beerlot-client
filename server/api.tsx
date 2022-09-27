import axios from "axios";

export const axiosTest = () => {
  axios
    .get("https://beerlot-core-obtg3qwuhq-an.a.run.app/api/v1/beers/1")
    .then((res) => {
      console.log(res.data.count);
    })
    .catch((error) => {
      console.log(error);
    });
};
