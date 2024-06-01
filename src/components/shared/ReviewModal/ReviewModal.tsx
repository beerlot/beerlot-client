import {
  useAllReviewsQuery,
  useCreateReviewMutation,
  useReviewUpdateMutation,
} from "@/../hooks/query/useReviewQuery";
import { MOCK_FEED_FILTER_LIST } from "@/../interface/static";
import { Box, Modal, ModalProps, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { ChangeEvent, useState } from "react";
import { ReviewInfoType } from "../../../../interface/types";
import { BeerReviewContent } from "./BeerReviewContent";
import { BeerSearchContent } from "./BeerSearchContent";
import { ReviewCancelDrawer } from "./ReviewCancelDrawer";

interface ReviewModalProps {
  existingReviewInfo?: ReviewInfoType;
  reviewId?: number | null;
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
  onOpen: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  existingReviewInfo,
  reviewId,
  isOpen,
  onClose,
}) => {
  const [reviewInfo, setReviewInfo] = useState<ReviewInfoType>({
    beerName: existingReviewInfo?.beerName ?? null,
    rate: existingReviewInfo?.rate ?? 0,
    place: existingReviewInfo?.place ?? "",
    review: existingReviewInfo?.review ?? "",
    image_url: existingReviewInfo?.image_url ?? [""],
  });
  const isCompleted = !!reviewInfo.beerName && !!reviewInfo.rate;
  const accessToken = Cookies.get("beerlot-oauth-auth-request") ?? "";
  const CloseReviewDrawer = useDisclosure();
  const [step, setStep] = useState(0);
  const [reviewInputValue, setReviewInputValue] = useState(
    existingReviewInfo?.review ?? ""
  );
  const [beerId, setBeerId] = useState<number | null>(null);
  const allReviewsQuery = useAllReviewsQuery({
    sort: MOCK_FEED_FILTER_LIST[0].tags[0],
  });
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewInputValue(e.target.value);
  };

  const handleClickLeftButton = () => {
    // TODO: reset everything and add null type
    setReviewInfo({
      beerName: null,
      rate: 0,
      place: null,
    });
    onClose();
    setReviewInputValue("");
    CloseReviewDrawer.onClose();
  };

  const handleClickRightButton = () => {
    CloseReviewDrawer.onClose();
  };

  const handleClickBack = () => {
    setStep(step - 1);
  };

  const handleChangeBeerName = (name: string, id: number) => {
    const newBeerReview = { ...reviewInfo, beerName: name };
    setReviewInfo(newBeerReview);
    setBeerId(id);
  };

  const handleChangeRate = (rate: number) => {
    const newBeerReview = { ...reviewInfo, rate: rate };
    setReviewInfo(newBeerReview);
  };

  const handleClickPlaceTag = (place: string | null) => {
    const newBeerReview = { ...reviewInfo, place: place };
    setReviewInfo(newBeerReview);
  };

  const createReviewMutation = useCreateReviewMutation(
    beerId ?? 0,
    accessToken,
    {
      onSuccess: () => {
        allReviewsQuery.refetch();
      },
    }
  );

  const updatedReviewInfo = {
    rate: reviewInfo.rate,
    buy_from: reviewInfo?.place ?? "",
    content: reviewInputValue,
    image_url:
      "https://fastly.picsum.photos/id/923/200/300.jpg?hmac=eiYSYaG7v46VlrE38Amrg33bd2FzVjaCsQrLMdekyAU",
  };

  const updateReview = useReviewUpdateMutation(
    reviewId ?? 0,
    accessToken,
    updatedReviewInfo,
    {
      onSuccess: () => {
        allReviewsQuery.refetch();
      },
    }
  );

  const handleClickComplete = () => {
    const newReviewInfo = {
      rate: reviewInfo.rate,
      buy_from: reviewInfo?.place ?? "",
      content: reviewInputValue,
      image_url:
        "https://fastly.picsum.photos/id/923/200/300.jpg?hmac=eiYSYaG7v46VlrE38Amrg33bd2FzVjaCsQrLMdekyAU",
    };
    if (reviewId) {
      updateReview.mutate();
    } else {
      createReviewMutation.mutate(newReviewInfo);
    }

    onClose();
    setReviewInfo({
      beerName: null,
      rate: 0,
      place: null,
    });
    setReviewInputValue("");
  };

  return (
    <Box>
      <ReviewCancelDrawer
        isOpen={CloseReviewDrawer.isOpen}
        onClose={CloseReviewDrawer.onClose}
        onClickLeftButton={handleClickLeftButton}
        onClickRightButton={handleClickRightButton}
      />
      <Modal
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
        autoFocus={false}
        initialFocusRef={undefined}
        finalFocusRef={undefined}
        trapFocus={false}
      >
        {step === 0 && (
          <BeerReviewContent
            onClose={onClose}
            reviewInfo={reviewInfo}
            onNext={() => setStep(1)}
            handleChangeRate={handleChangeRate}
            handleClickPlaceTag={handleClickPlaceTag}
            handleInputChange={handleInputChange}
            reviewInputValue={reviewInputValue}
            handleClickComplete={handleClickComplete}
            isCompleted={isCompleted}
          />
        )}

        {step === 1 && (
          <BeerSearchContent
            maxW="450px"
            onClickBack={handleClickBack}
            onChangeBeerName={handleChangeBeerName}
          />
        )}
      </Modal>
    </Box>
  );
};
