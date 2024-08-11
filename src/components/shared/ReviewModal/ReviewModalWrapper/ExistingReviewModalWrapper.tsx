import { Center, Modal, ModalContent, ModalProps } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import {
  useReviewQuery,
  useReviewUpdateMutation,
} from "../../../../../hooks/reviews/useReview";
import {
  BeerTypeV2,
  CreateReviewRequestTypeV2,
} from "../../../../../typedef/review";
import { BeerlotLoading } from "../../Loading";
import { ReviewModal } from "../ReviewModal";
import { useUserReviewsQuery } from "@/../hooks/query/useUserQuery";

interface ExistingReviewModalWrapperProps {
  reviewId?: number | null;
  isModalOpen: ModalProps["isOpen"];
  onCloseModal: ModalProps["onClose"];
}

export const ExistingReviewModalWrapper: React.FC<
  ExistingReviewModalWrapperProps
> = ({ reviewId, isModalOpen, onCloseModal }) => {
  const accessToken = Cookies.get("beerlot-oauth-auth-request") ?? "";
  const reviewQuery = useReviewQuery(reviewId);
  const userReviewQuery = useUserReviewsQuery(accessToken);
  const { isLoading: _isLoading, isFetching, isRefetching } = reviewQuery;
  const isLoading = _isLoading || isFetching || isRefetching;
  const existingReviewData = reviewQuery.data;
  const [beerInfo, setBeerInfo] = useState<BeerTypeV2 | undefined>();
  const [reviewInfo, setReviewInfo] = useState<CreateReviewRequestTypeV2>({
    content: "",
    image_url: [],
    buy_from: "",
    rate: 0,
  });

  useEffect(() => {
    if (existingReviewData) {
      setReviewInfo({
        rate: existingReviewData.rate ?? 0,
        content: existingReviewData.content ?? "",
        image_url: existingReviewData.image_url ?? [],
        buy_from: existingReviewData.buy_from ?? "",
      });
      setBeerInfo(existingReviewData.beer);
    }
  }, [existingReviewData]);

  const { mutate: updateReview } = useReviewUpdateMutation(accessToken);

  const handleComplete = (beerId: number) => {
    if (reviewId !== undefined && reviewId !== null) {
      updateReview({ reviewId, newContent: reviewInfo }, {
        onSuccess: () => {
          userReviewQuery.refetch();
        }
      });
    }
  };

  if (isLoading || !existingReviewData) {
    <Modal onClose={onCloseModal} size={"full"} isOpen={isModalOpen}>
      <ModalContent px="20px" pb="40px" maxW="450px" bg="white">
        {isLoading && (
          <Center flex={1}>
            <BeerlotLoading />
          </Center>
        )}
      </ModalContent>
    </Modal>;
  }

  return (
    <ReviewModal
      isModalOpen={isModalOpen}
      onCloseModal={onCloseModal}
      onComplete={handleComplete}
      onChangeReviewInfo={setReviewInfo}
      reviewInfo={reviewInfo}
      beerInfo={beerInfo}
    />
  );
};
