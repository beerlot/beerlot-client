import { ReviewTypeV2 } from '../../../../types/review'
import { Flex } from '@chakra-ui/react'
import { FollowingTabPanelItem } from '@components/feed/TabPanelItem'

interface ReviewsListProps {
  reviews: ReviewTypeV2[]
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <Flex flexDir={'column'} gap="10px">
      {reviews?.map((review) => {
        return (
            <FollowingTabPanelItem
              key={review.id}
              reviewId={review.id}
              nickname={review.member.username}
              reviewTime={review.updated_at}
              beerName={review.beer?.name}
              rate={review.rate}
              memberImage={review.member.image_url}
              imageSrc={review.image_url}
              content={review.content}
              likedCount={review.like_count}
              isEditable={false}
            />
        )
      })}
    </Flex>
  )
}