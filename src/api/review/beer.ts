import { CreateReviewRequestType } from "@/../hooks/query/useReviewQuery";
import { BeerReviewsQueryParams } from "@/../typedef/server/beer";
import axios from "axios";
import { ReviewSortEnum } from "../../../interface/types";

export const createReviewApi = async (
  beerId: number,
  data: CreateReviewRequestType,
  accessToken: string
) => {
  const url = `/api/v1/beers/${beerId}/reviews`;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const response = await axios.post(url, data, config);

  return response.data;
};

export const fetchBeerReviewsApi = async (
  queryParams: BeerReviewsQueryParams
) => {
  const {
    beerId,
    page = 1,
    size = 10,
    sort = ReviewSortEnum.RecentlyUpdated,
  } = queryParams;

  const res = await axios.get(`/api/v1/beers/${beerId}/reviews`, {
    params: {
      page,
      size,
      sort,
    },
  });

  return res.data;
};
