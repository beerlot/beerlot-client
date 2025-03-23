import { Container, HStack, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Rating } from '../../shared/Rating'
import { roundToDecimal } from '@/../utils/number'
import { FeedFilter } from '@/components/feed/FeedFilter/FeedFilter'
import { useBeerReviewsQuery } from '../../../../hooks/reviews/useBeer'
import { MOCK_FEED_FILTER_LIST } from '../../../../interface/static'
import { BeerInfoHStack } from './BasicPanelList'
import { UserReview } from './UserReview'
import { ReviewSortType } from '../../../../types/common'
import { EmptyReviewsList } from '@components/details/tab-panel/EmptyReviewsList'
import { ReviewCountDisplay } from '@components/details/tab-panel/ReviewCounter'
import { ReviewsList } from '@components/details/tab-panel/ReviewsList'

interface ReviewPanelListProps {
  rate: number | '-'
  beerId: number
  buyFrom: string[]
  beerName: string
}

export const ReviewPanelList: React.FC<ReviewPanelListProps> = ({
  beerId,
  rate,
  buyFrom,
  beerName,
}) => {
  const [selectedTag, setSelectedTag] = useState<ReviewSortType>(
    MOCK_FEED_FILTER_LIST[0].tags[0]
  )

  const { data, refetch } = useBeerReviewsQuery(
    { beerId, sort: selectedTag },
    { enabled: false }
  )
  const reviews = data

  useEffect(() => {
    refetch()
  }, [selectedTag, refetch])

  const handleSelectTag = (tag: ReviewSortType) => {
    setSelectedTag(tag)
  }

  return (
    <Container px={5} py='20px' bg='yellow.100'>
      <VStack gap='10px' alignItems={'start'}>
        <ReviewCountDisplay reviewLength={reviews?.length ?? 0} />
        <UserReview beerId={beerId} beerName={beerName} />
        <Text textStyle={'h2_bold'} mt={10}>
          모든 리뷰
        </Text>
        <BeerInfoHStack label={'제보된 판매처'} flexBasis={'81px'}>
          <HStack>
            {buyFrom?.map((buyFrom) => {
              return (
                <Text textStyle={'h3'} key={buyFrom} textColor='black.100'>
                  {buyFrom}
                </Text>
              )
            })}
          </HStack>
        </BeerInfoHStack>
        <BeerInfoHStack label={'평균 별점'} flexBasis={'81px'}>
          <HStack>
            <Rating
              starSize={23}
              buttonSize={'xs'}
              _rate={rate === '-' ? 0 : roundToDecimal(rate)}
              styleProps={{
                gap: '0px',
              }}
            />
            <Text textStyle={'h3'} textColor='black.100'>
              {rate === '-' ? '-' : roundToDecimal(rate)}
            </Text>
            <Text textStyle={'h3'} textColor='gray.300'>
              {' '}
              / 5
            </Text>
          </HStack>
        </BeerInfoHStack>
        <FeedFilter selectedTag={selectedTag} onClickTag={handleSelectTag} />
        {/* ALL_FEED_MOCK을 prop으로 받아서 AllTabPanelList랑 공유하기 */}
      </VStack>
      {reviews && reviews?.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <EmptyReviewsList />
      )}
    </Container>
  )
}
