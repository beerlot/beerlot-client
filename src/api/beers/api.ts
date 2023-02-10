import axios from "axios";
import {SignUpRequestType} from "../../../interface/server/types/Auth";
import {
  BeerResultType,
  CategoryType,
  LANGUAGE_TYPE,
} from "../../../interface/types";

export const signUpWithSocialLogin = async (request: SignUpRequestType) => {
  try {
    const result = await axios.patch(`/api/v1/auth/signup`, request);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const getNewAccessTokenWithRefreshToken = async () => {
  try {
    const result = await axios.get(`/api/v1/auth/refresh`);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const getAllBeersApi = async (index: number) => {
  try {
    const result: BeerResultType = await axios.get(`/api/v1/beers/${index}`);
    console.log(result, "getAllBeersApi");
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getTop10BeersApi = async () => {
  const language: LANGUAGE_TYPE = LANGUAGE_TYPE.KR;
  try {
    const result: BeerResultType[] = await axios.get(
      `/api/v1/beers/top?language=${language}`
    );
    console.log(result, "getTop10BeersApi");
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getBeerCategoriesApi = async () => {
  try {
    const result: CategoryType[] = await axios.get(`/api/v1/categories`);
    console.log(result, "getBeerCategoriesApi");
    return result;
  } catch (error) {
    console.error(error);
  }
};