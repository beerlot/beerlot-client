import axios from "axios";
import { useMutation } from "react-query";

export const useLikeBeer = ({ beerId2 }: { beerId2: number }) => {
  const likeBeerMutation = useMutation((beerId2) => {
    return axios.post(`/beers/${beerId2}/likes`, { beerId2 });
  });

  return {
    likeBeerMutation,
  };
};
