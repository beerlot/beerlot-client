import axios from "axios";
import {BeerResultType} from "../interface/types";

export const getAllBeersAysync = async (index: number) => {
  const result: BeerResultType = await axios
    .get(`/api/v1/beers/${index}`)
    .then((res) => {
      return res.data;
    });
  return result;
};

export const getTop10BeersAsync = async () => {
  const result: BeerResultType[] = await axios
    .get(`/api/v1/beers/top`)
    .then((res) => {
      return res.data;
    });
  return result;
};
