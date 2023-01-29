import axios from "axios";
import {
  BeerResultType,
  CategoryType,
  LANGUAGE_TYPE,
  ReviewSortEnum,
  OAUTH_PROVIDER,
} from "../interface/types";

export const getAllBeersApi = async (index: number) => {
  const result: BeerResultType = await axios
    .get(`/api/v1/beers/${index}`)
    .then((res) => {
      return res.data;
    });
  return result;
};

// TODO: prod 모드 보고, Redirect URL 변경
export const loginWithSocialLogin = async (provider: OAUTH_PROVIDER) => {
  try {
    console.log("provider", provider);
    const result = await axios.get(
      `/api/v1/authorize/${provider}?redirect-url=https://beerlot-client.vercel.app`
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTop10BeersApi = async () => {
  const language: LANGUAGE_TYPE = LANGUAGE_TYPE.KR;

  const result: BeerResultType[] = await axios
    .get(`/api/v1/beers/top?language=${language}`)
    .then((res) => {
      return res.data;
    });
  return result;
};

export const getBeerCategoriesApi = async () => {
  const result: CategoryType[] = await axios
    .get(`/api/v1/categories`)
    .then((res) => {
      return res.data;
    });
  return result;
};

// review
export const getAllReviewApi = async ({
  page = 1,
  size = 10,
  sort = ReviewSortEnum.RecentlyUpdated,
}: {
  page?: number;
  size?: number;
  sort?: ReviewSortEnum;
}) => {
  console.log("sort", sort);
  const result = await axios
    .get(`/api/v1/reviews?page=${page}&size=${size}&sort=${sort}`)
    .then((res) => {
      return res.data;
    });
  return result;
};
