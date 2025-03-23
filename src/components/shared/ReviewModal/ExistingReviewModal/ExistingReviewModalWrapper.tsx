import { Center, ModalProps } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {
  useReviewQuery,
  useReviewUpdateMutation,
} from '../../../../../hooks/reviews/useReview'
import {
  BeerTypeV2,
  CreateReviewRequestTypeV2,
} from '../../../../../types/review'
import { ExistingReviewModal } from '@components/shared/ReviewModal/ExistingReviewModal/ExistingReviewModal'
import { useQueryClient } from 'react-query'
import { BeerlotLoading } from '@components/shared/Loading'

interface ExistingReviewModalWrapperProps {
  reviewId?: number | null
  isModalOpen: ModalProps['isOpen']
  onCloseModal: ModalProps['onClose']
}

export const ExistingReviewModalWrapper: React.FC<
  ExistingReviewModalWrapperProps
> = ({ reviewId, isModalOpen, onCloseModal }) => {
  const queryClient = useQueryClient()
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const { data: existingReviewData } = useReviewQuery(reviewId)

  const [beerInfo, setBeerInfo] = useState<BeerTypeV2>()
  const [reviewInfo, setReviewInfo] = useState<CreateReviewRequestTypeV2>()

  useEffect(() => {
    if (existingReviewData) {
      setReviewInfo({
        rate: existingReviewData.rate ?? 0,
        content: existingReviewData.content ?? '',
        image_url: existingReviewData.image_url ?? [],
        buy_from: existingReviewData.buy_from ?? '',
      })
      setBeerInfo(existingReviewData.beer)
    }
  }, [existingReviewData])

  const { mutate: updateReview } = useReviewUpdateMutation(accessToken)

  const handleComplete = () => {
    if (reviewId === undefined || reviewId === null || !reviewInfo) return
    updateReview(
      { reviewId, newContent: reviewInfo },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['userReviews'])
          onCloseModal()
        },
      }
    )
  }

  if (!reviewInfo || !beerInfo) {
    return (
      <Center h={'100vh'}>
        <BeerlotLoading />
      </Center>
    )
  }

  return (
    <ExistingReviewModal
      isModalOpen={isModalOpen}
      onCloseModal={onCloseModal}
      onComplete={handleComplete}
      onChangeReview={setReviewInfo}
      review={reviewInfo}
      beer={beerInfo}
    />
  )
}
