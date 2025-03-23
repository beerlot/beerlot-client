import {
  Modal,
  ModalContent,
  ModalProps,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {
  BeerTypeV2,
  CreateReviewRequestTypeV2,
} from '../../../../../types/review'
import { BeerReviewContent } from '../BeerReviewContent'
import { ReviewExitConfirmationDrawer } from '../ReviewExitConfirmationDrawer'
import { initialReviewInfo } from '@components/shared/ReviewModal/ReviewModal/ReviewModalWrapper'

interface ExistingReviewModalProps {
  review: CreateReviewRequestTypeV2
  beer: BeerTypeV2
  isModalOpen: ModalProps['isOpen']
  onChangeReview: (data?: CreateReviewRequestTypeV2) => void
  onCloseModal: ModalProps['onClose']
  onComplete: (beerId: number) => void
}

export const ExistingReviewModal: React.FC<ExistingReviewModalProps> = ({
  review,
  beer,
  isModalOpen,
  onChangeReview,
  onCloseModal,
  onComplete,
}) => {
  const {
    onClose: onCloseConfirmDrawer,
    onOpen: onOpenConfirmDrawer,
    isOpen: isOpenConfirmDrawer,
  } = useDisclosure()

  const beerName = beer?.name
  const beerId = beer?.id
  const isCompleted = !!beer?.name && !!review?.rate && !!review?.content

  const handleComplete = () => {
    if (beerId) onComplete(beerId)
  }

  const handleChangeReviewInfo = (
    key: string,
    value: string | number | string[]
  ) => {
    if (!review) return
    onChangeReview({ ...review, [key]: value })
  }

  useEffect(() => {
    return () => {
      onChangeReview(initialReviewInfo)
    }
  }, [])

  return (
    <>
      <Modal onClose={onCloseModal} size={'full'} isOpen={isModalOpen}>
        <ModalContent
          px='20px'
          h={'fit-content'}
          pb='40px'
          maxW='450px'
          bg='white'
        >
          <BeerReviewContent
            onOpenDrawer={onOpenConfirmDrawer}
            reviewInfo={review}
            onComplete={handleComplete}
            onChangeReviewInfo={handleChangeReviewInfo}
            beerName={beerName}
            isCompleted={isCompleted}
          />
        </ModalContent>
      </Modal>

      <ReviewExitConfirmationDrawer
        isOpen={isOpenConfirmDrawer}
        onClose={onCloseConfirmDrawer}
        onClickLeftButton={() => {
          onCloseConfirmDrawer()
          onCloseModal()
          onChangeReview()
        }}
        onClickRightButton={onCloseConfirmDrawer}
      />
    </>
  )
}
