import { AllReviewsQueryParams } from "@/../hooks/query/useReviewQuery";
import axios from "axios";
import {
  LANGUAGE_TYPE,
  ReviewSortEnum,
  UpdatedReviewInfo,
} from "../../../interface/types";

// 리뷰 1개 delete
export const deleteReviewApi = async (
  reviewId: number,
  accessToken: string
) => {
  const url = `/api/v1/reviews/${reviewId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const response = await axios.delete(url, config);
  return response.data;
};

export const fetchAllReviewsApi = async (queryParam: AllReviewsQueryParams) => {
  const {
    page = 1,
    size = 10,
    sort = ReviewSortEnum.RecentlyUpdated,
  } = queryParam;
  const language: LANGUAGE_TYPE = LANGUAGE_TYPE.KR;
  const res = await axios.get(`/api/v1/reviews`, {
    params: {
      page,
      size,
      sort,
      language,
    },
  });
  return res.data;
};

export const updateReviewApi = async (
  reviewId: number,
  accessToken: string,
  newContent: UpdatedReviewInfo
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  const res = await axios.patch(
    `/api/v1/reviews/${reviewId}`,
    newContent,
    config
  );
  return res.data;
};

// get one review by ID
export const getSingleReviewApi = async (reviewId?: number | null) => {
  if (reviewId === null || reviewId === undefined) {
    throw new Error("Review ID cannot be null.");
  }
  const language: LANGUAGE_TYPE = LANGUAGE_TYPE.KR;
  const res = await axios.get(`/api/v1/reviews/${reviewId}`, {
    params: {
      language,
    },
  });
  return res.data;
};
