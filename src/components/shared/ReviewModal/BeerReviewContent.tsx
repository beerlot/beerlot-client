import {
  Button,
  ModalBody,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { CreateReviewRequestTypeV2 } from '../../../../types/review'
import { LeftCloseRandom } from '../Headers/LeftCloseRandom'
import BeerNameSection from './BeerNameSection'
import { BeerPurchaseSection } from './BeerPurchaseSection'
import { BeerRatingSection } from './BeerRatingSection'
import { BeerReviewTextSection } from './BeerReviewTextSection'
import { UploadedReviewImages } from './UploadedReviewImages'

interface BeerReviewContentProps extends ModalContentProps {
  isCompleted: boolean
  reviewInfo: CreateReviewRequestTypeV2
  beerName?: string
  onNext?: () => void
  onOpenDrawer: () => void
  onComplete: () => void
  onChangeReviewInfo: (key: string, value: string | number | string[]) => void
}

export const BeerReviewContent: React.FC<BeerReviewContentProps> = ({
  isCompleted,
  beerName = '',
  reviewInfo,
  onNext,
  onOpenDrawer,
  onComplete,
  onChangeReviewInfo,
}) => {
  const handleRate = (rate: number) => {
    onChangeReviewInfo('rate', rate)
  }

  const handleChangePlaceTag = (place: string) => {
    onChangeReviewInfo('buy_from', place)
  }

  const handleImage = (imageUrl: string) => {
    onChangeReviewInfo('image_url', imageUrl)
  }

  const handleChangeInput = (input: string) => {
    onChangeReviewInfo('content', input)
  }

  return (
    <>
      <ModalHeader pt='46px'>
        <LeftCloseRandom onClose={onOpenDrawer} title='글쓰기' />
      </ModalHeader>
      <ModalBody p={0} pt='10px'>
        <VStack
          gap='20px'
          justifyContent='flex-start'
          alignItems={'flex-start'}
        >
          <BeerNameSection beerName={beerName} onClick={onNext} />

          <BeerRatingSection onRate={handleRate} rate={reviewInfo.rate} />

          <BeerPurchaseSection
            currentPlace={reviewInfo.buy_from}
            handleChangePlaceTag={handleChangePlaceTag}
          />

          <BeerReviewTextSection
            onChangeInput={handleChangeInput}
            input={reviewInfo.content}
          />

          <UploadedReviewImages
            setImageUrl={handleImage}
            imageUrl={reviewInfo.image_url}
          />
        </VStack>
      </ModalBody>
      <ModalFooter px={0}>
        <Button
          onClick={onComplete}
          w='full'
          bg={'blue.100'}
          _hover={{}}
          borderRadius='10px'
          isDisabled={!isCompleted}
          _disabled={{ bg: 'gray.200', cursor: 'not-allowed' }}
        >
          <Text color='white.100' textStyle='h2'>
            작성 완료
          </Text>
        </Button>
      </ModalFooter>
    </>
  )
}
