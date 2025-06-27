import { Box, Container, useDisclosure } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { CenteredTitle } from '../shared/Headers/CenteredTitle'

import { FeedTabList } from './FeedTabList'
import { ReviewModalTriggerButton } from '../shared/ReviewModal/ReviewModalWrapper/ReviewModalTriggerButton'
import { ReviewModalWrapper } from '../shared/ReviewModal/ReviewModal/ReviewModalWrapper'
import { useAllReviewsInfiniteQuery } from '../../../hooks/reviews/useReview'
import { LanguageType, ReviewSortType } from '../../../types/common'
import { MOCK_FEED_FILTER_LIST } from '../../../interface/static'

export const FeedTemplate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const router = useRouter()
  const selectedTag: ReviewSortType = MOCK_FEED_FILTER_LIST[0].tags[0]
  const { refetch: invalidateReviews } = useAllReviewsInfiniteQuery({
    page: 1,
    size: 10,
    sort: selectedTag ?? ReviewSortType.RECENTLY_CREATED,
    language: LanguageType.KR,
  })

  const handleOpenReviewModal = () => {
    if (!accessToken) {
      router.push('/login')
      return
    }
    onOpen()
  }

  return (
    <Box w='full' h='100vh' bg='gray.100'>
      <Container p={0} bg='white' maxW='450px' h={'full'}>
        <CenteredTitle />
        <FeedTabList />

        <ReviewModalTriggerButton onClick={handleOpenReviewModal} />
        <ReviewModalWrapper
          isModalOpen={isOpen}
          onCloseModal={onClose}
          onSuccess={invalidateReviews}
        />
      </Container>
    </Box>
  )
}
