import {
  useUserInfoQuery,
  useUserLikedReviewsQuery,
  useUserReviewsQuery,
} from '@/../hooks/query/useUserQuery'
import { FollowingTabPanelItem } from '@/components/feed/TabPanelItem'
import { ReviewDeleteConfirmationDrawer } from '@/components/shared/ReviewModal/ReviewDeleteConfirmationDrawer'
import { ExistingReviewModalWrapper } from '@components/shared/ReviewModal/ExistingReviewModal/ExistingReviewModalWrapper'
import { Flex, useDisclosure } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'
import { useReviewDeleteMutation } from '../../../../hooks/reviews/useReview'
import { MemberReviewType } from '../../../../types/server/review/response'
import { InfiniteScrollWrapper } from '@components/shared/InfiniteScrollWrapper'
import { LanguageType, ReviewSortType } from '../../../../types/common'

const BeerReviews = () => {
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const userReviewQuery = useUserReviewsQuery(accessToken, {
    page: 1,
    size: 10,
    sort: ReviewSortType.RECENTLY_UPDATED,
    language: LanguageType.KR,
  })
  const userQuery = useUserInfoQuery(accessToken ?? '')
  const { image_url = '' } = userQuery?.data ?? {}
  const { isOpen, onOpen, onClose } = useDisclosure()
  const likedReviewsListQuery = useUserLikedReviewsQuery(accessToken)
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null)

  const handleEdit = (reviewId: number) => {
    setSelectedReviewId(reviewId)
    onOpen()
  }

  const deleteReviewMutation = useReviewDeleteMutation(accessToken, {
    onSuccess: () => {
      userReviewQuery.refetch()
    },
  })

  const handleDelete = (reviewId: number) => {
    deleteReviewMutation.mutate(reviewId)
  }

  const {
    isOpen: isOpenDeleteConfirmation,
    onOpen: onOpenDeleteConfirmation,
    onClose: onCloseDeleteConfirmation,
  } = useDisclosure()

  const lastPage =
    userReviewQuery.data?.pages[userReviewQuery.data.pages.length - 1]
  const shouldLoadMore =
    lastPage && lastPage.contents && lastPage.contents.length > 0

  const handleLoadMore = () => {
    if (
      userReviewQuery.hasNextPage &&
      !userReviewQuery.isFetchingNextPage &&
      shouldLoadMore
    ) {
      userReviewQuery.fetchNextPage()
    }
  }

  return (
    <Flex flexDirection='column' gap={'10px'} h='full'>
      <InfiniteScrollWrapper
        handleLoadMore={handleLoadMore}
        isFetching={userReviewQuery.isFetchingNextPage}
        // TODO: add empty UI
        needToFetch={shouldLoadMore}
      >
        {userReviewQuery.data?.pages?.map((page) =>
          page.contents?.map((feed) => (
            <>
              <FollowingTabPanelItem
                key={feed.id}
                reviewId={Number(feed.id)}
                isLiked={likedReviewsListQuery.data?.includes(feed.id ?? 0)}
                nickname={feed?.beer?.name ?? ''}
                reviewTime={feed.updated_at ?? ''}
                rate={feed.rate ?? 0}
                imageSrc={feed.image_url}
                memberImage={image_url}
                content={feed.content ?? ''}
                likedCount={feed.like_count ?? 0}
                isEditable={true}
                onDelete={onOpenDeleteConfirmation}
                onEdit={() => handleEdit(feed.id ?? 0)}
              />
              <ReviewDeleteConfirmationDrawer
                isOpen={isOpenDeleteConfirmation}
                onClose={onCloseDeleteConfirmation}
                onClickLeftButton={() => {
                  onCloseDeleteConfirmation()
                }}
                onClickRightButton={() => {
                  handleDelete(feed.id ?? 0)
                  onCloseDeleteConfirmation()
                }}
              />
            </>
          ))
        )}
      </InfiniteScrollWrapper>

      {isOpen && (
        <ExistingReviewModalWrapper
          reviewId={selectedReviewId}
          isModalOpen={isOpen}
          onCloseModal={onClose}
        />
      )}
    </Flex>
  )
}

export default BeerReviews
