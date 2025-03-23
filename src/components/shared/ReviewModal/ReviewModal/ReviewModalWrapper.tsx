import { ModalProps } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React from 'react'
import { useCreateReviewMutation } from '../../../../../hooks/reviews/useBeer'
import {
  BeerTypeV2,
  CreateReviewRequestTypeV2,
} from '../../../../../types/review'
import { useErrorToast } from '@/hooks/shared/useErrorToast'
import { ReviewModal } from '@components/shared/ReviewModal/ReviewModal/ReviewModal'

interface ReviewModalWrapperProps {
  isModalOpen: ModalProps['isOpen']
  onCloseModal: ModalProps['onClose']
  targetBeerInfo?: BeerTypeV2
  onSuccess?: () => void
}

export const ReviewModalWrapper: React.FC<ReviewModalWrapperProps> = ({
  isModalOpen,
  targetBeerInfo,
  onCloseModal,
  onSuccess,
}) => {
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const { showErrorToast } = useErrorToast()
  const { mutate: createReview } = useCreateReviewMutation(accessToken)

  const handleComplete = (
    beerId: number,
    reviewInfo: CreateReviewRequestTypeV2
  ) => {
    if (beerId === null) return
    if (!reviewInfo) return
    createReview(
      {
        beerId: beerId,
        data: reviewInfo,
      },
      {
        onSuccess: () => {
          onSuccess?.()
          onCloseModal()
        },
        onError: (error) => {
          showErrorToast(error.response, {
            409: '이미 리뷰를 작성한 맥주입니다. 다른 맥주를 선택해주세요.',
          })
        },
      }
    )
  }

  return (
    <>
      {isModalOpen && (
        <ReviewModal
          isModalOpen={isModalOpen}
          onCloseModal={onCloseModal}
          onComplete={handleComplete}
          beerInfo={targetBeerInfo}
        />
      )}
    </>
  )
}

export const initialReviewInfo: CreateReviewRequestTypeV2 = {
  content: '',
  image_url: '',
  buy_from: '',
  rate: 0,
}
