import { ReviewModalWrapper } from '@components/shared/ReviewModal/ReviewModal/ReviewModalWrapper'
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useMyReviewsQuery } from '../../../../hooks/reviews/useReview'
import { FollowingTabPanelItem } from '@components/feed/TabPanelItem'
import { useQueryClient } from 'react-query'
import { myReviewsQueryKey } from '../../../../hooks/query/useBeerQuery'
import { beerReviewsQueryKey } from '../../../../hooks/reviews/useBeer'

interface UserReviewProps {
  beerId: number
  beerName: string
}

export const UserReview: React.FC<UserReviewProps> = ({ beerId, beerName }) => {
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const queryClient = useQueryClient()

  const handleButtonClick = () => {
    if (!accessToken) {
      router.push('/login')
    } else {
      onOpen()
    }
  }

  const { data: review } = useMyReviewsQuery(beerId, accessToken)
  const handleSuccess = () => {
    queryClient.invalidateQueries(myReviewsQueryKey(beerId))
    beerReviewsQueryKey(beerId)
  }

  return (
    <>
      <Text textStyle={'h2_bold'}>내가 쓴 리뷰</Text>
      <ReviewModalWrapper
        isModalOpen={isOpen}
        onCloseModal={onClose}
        targetBeerInfo={{
          id: beerId,
          name: beerName,
        }}
        onSuccess={handleSuccess}
      />

      {review !== undefined ? (
        <Box w={'full'} p={0}>
          <FollowingTabPanelItem
            key={review.id}
            reviewId={review.id ?? 0}
            nickname={review.member?.username ?? ''}
            memberImage={review.member?.image_url ?? ''}
            reviewTime={review.updated_at ?? ''}
            beerName={review.beer?.name ?? ''}
            rate={review.rate ?? 0}
            imageSrc={review.image_url}
            content={review.content ?? ''}
            likedCount={review.like_count ?? 0}
            isEditable={false}
          />
        </Box>
      ) : (
        <Flex
          w='full'
          p={5}
          bgColor='white'
          borderRadius='lg'
          justifyContent='center'
          alignItems='center'
          gap={4}
          flexDir={'column'}
          boxShadow='md'
        >
          <Text
            textAlign='center'
            textStyle={'h3'}
            color='#333333'
            whiteSpace='pre-wrap'
          >
            이 맥주 드셔보셨다면, 어땠는지 기록해볼까요?{'\n'}짧게라도 좋아요 😆
          </Text>
          <Button
            px={8}
            py={2}
            textStyle={'h3_bold'}
            h={'fit-content'}
            bgColor='#FF6B00'
            borderRadius='full'
            color='white'
            onClick={handleButtonClick}
            _hover={{}}
          >
            리뷰 작성하기
          </Button>
        </Flex>
      )}
    </>
  )
}
