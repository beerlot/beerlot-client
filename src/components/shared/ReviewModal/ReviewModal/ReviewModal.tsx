import {
  Center,
  Modal,
  ModalContent,
  ModalProps,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  BeerTypeV2,
  CreateReviewRequestTypeV2,
} from '../../../../../types/review'
import { BeerlotLoading } from '../../Loading'
import { BeerReviewContent } from '../BeerReviewContent'
import { BeerSearchContent } from '../BeerSearchContent'
import { ReviewExitConfirmationDrawer } from '../ReviewExitConfirmationDrawer'
import { initialReviewInfo } from '@components/shared/ReviewModal/ReviewModal/ReviewModalWrapper'

interface ReviewModalProps {
  isModalOpen: ModalProps['isOpen']
  onCloseModal: ModalProps['onClose']
  onComplete: (beerId: number, reviewInfo: CreateReviewRequestTypeV2) => void
  beerInfo?: BeerTypeV2
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isModalOpen,
  onCloseModal,
  onComplete,
  beerInfo,
}) => {
  const [review, setReview] =
    useState<CreateReviewRequestTypeV2>(initialReviewInfo)
  const [localBeerInfo, setLocalBeerInfo] = useState<BeerTypeV2 | undefined>(
    beerInfo
  )
  const [step, setStep] = useState(0)
  const {
    onClose: onCloseConfirmDrawer,
    onOpen: onOpenConfirmDrawer,
    isOpen: isOpenConfirmDrawer,
  } = useDisclosure()

  const hasBeerInfo = !!localBeerInfo && localBeerInfo.name && localBeerInfo.id
  const isCompleted = !!hasBeerInfo && !!review?.rate && !!review?.content

  const handleComplete = () => {
    if (localBeerInfo?.id) onComplete(localBeerInfo.id, review)
  }

  const handleChangeReviewInfo = (
    key: string,
    value: string | number | string[]
  ) => {
    if (!review) return
    setReview({ ...review, [key]: value })
  }

  const handleChangeBeerName = (beer: BeerTypeV2) => {
    setLocalBeerInfo(beer)
  }

  useEffect(() => {
    return () => {
      setStep(0)
      setReview(initialReviewInfo)
    }
  }, [])

  useEffect(() => {
    setLocalBeerInfo(beerInfo)
  }, [beerInfo])

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
          {step === 0 && (
            <BeerReviewContent
              isCompleted={isCompleted}
              reviewInfo={review}
              onNext={hasBeerInfo ? undefined : () => setStep(1)}
              onOpenDrawer={onOpenConfirmDrawer}
              onComplete={handleComplete}
              onChangeReviewInfo={handleChangeReviewInfo}
              beerName={localBeerInfo?.name ?? ''}
            />
          )}

          {step === 1 && (
            <BeerSearchContent
              onBack={() => {
                setStep(step - 1)
              }}
              onChangeBeerName={handleChangeBeerName}
            />
          )}
        </ModalContent>
      </Modal>

      <ReviewExitConfirmationDrawer
        isOpen={isOpenConfirmDrawer}
        onClose={onCloseConfirmDrawer}
        onClickLeftButton={() => {
          onCloseConfirmDrawer()
          onCloseModal()
        }}
        onClickRightButton={onCloseConfirmDrawer}
      />
    </>
  )
}
