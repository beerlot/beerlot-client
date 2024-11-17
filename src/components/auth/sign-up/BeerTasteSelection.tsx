import {
  Box,
  Flex,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { POLICY_LABEL } from '../../../../interface/server/types/Auth'

import { useSignupQuery } from '@/../hooks/query/useAuthQuery'
import {
  useBeersQuery,
  useBeersInfiniteQuery,
} from '../../../../hooks/query/useBeerQuery'
import { BeerSortType } from '../../../../types/common'
import FloatingButton from '../../shared/FloatingButton'
import { UserNameSection } from '@components/auth/sign-up/UserNameSection'
import { RecommendBeerCard } from '@components/auth/sign-up/RecommendBeerCard'
import { InfiniteScrollWrapper } from '@components/shared/InfiniteScrollWrapper'

const FAVORITE_BEER_MIN_COUNTER = 5

interface BeerTasteSelectionProps extends StackProps {
  username?: string
  selectedBeers: number[]
  updateSelectedBeers: (beerId: number) => void
  onNext: () => void
}

const BeerTasteSelection: React.FC<BeerTasteSelectionProps> = ({
  selectedBeers,
  updateSelectedBeers,
  onNext,
  username,
  ...props
}) => {
  const isFullfilled =
    selectedBeers && selectedBeers.length >= FAVORITE_BEER_MIN_COUNTER

  const signupInfo = {
    username: username,
    agreed_policies: [
      POLICY_LABEL.PERSONAL_INFORMATION_POLICY,
      POLICY_LABEL.TERMS_OF_SERVICE,
    ],
  }

  const accessToken = Cookies.get('beerlot-oauth-auth-guest') ?? ''

  const signupQuery = useSignupQuery(signupInfo, accessToken, {
    onSuccess: () => {
      Cookies.set('beerlot-oauth-auth-request', accessToken)

      Cookies.remove('beerlot-oauth-auth-guest')
      onNext()
    },
  })

  const handleClickComplete = () => {
    signupQuery.refetch()
  }

  const topBeerQuery = useBeersInfiniteQuery({
    sort: BeerSortType.MOST_LIKES,
  })

  const handleLoadMore = () => {
    if (topBeerQuery.hasNextPage && !topBeerQuery.isFetchingNextPage) {
      topBeerQuery.fetchNextPage()
    }
  }

  return (
    <Flex
      flexDir={'column'}
      w='full'
      overflowY='auto'
      mt={'44px'}
      px={5}
      className='hide-scrollbar'
      {...props}
    >
      <UserNameSection username={username} />

      <Text textColor='black.100' textStyle={'h1'} pb={1}>
        5개 이상 골라주세요!
      </Text>
      <Text fontSize='12px' textColor='gray.300' textStyle={'h4'} pb={6}>
        고른 맥주를 바탕으로 취향 분석 후, 맥주를 추천해드릴게요 :)
      </Text>

      <InfiniteScrollWrapper
        handleLoadMore={handleLoadMore}
        isFetching={topBeerQuery.isFetchingNextPage}
      >
        <SimpleGrid columns={3} spacingX='10px' spacingY={6} pb={6}>
          {topBeerQuery.data?.pages.map((page) =>
            page.contents?.map((item) => {
              const isSelected = item.id
                ? selectedBeers?.includes(item.id)
                : false
              return (
                <RecommendBeerCard
                  key={item.id}
                  onClick={() => updateSelectedBeers(item.id)}
                  selected={isSelected}
                  item={item}
                />
              )
            })
          )}
        </SimpleGrid>
      </InfiniteScrollWrapper>

      <FloatingButton
        pos='sticky'
        w='full'
        disabled={!isFullfilled}
        text='완료!'
        onClick={handleClickComplete}
        bgColor={isFullfilled ? 'orange.200' : 'gray.200'}
        textColor={isFullfilled ? 'white.100' : 'black.100'}
        boxShadow={isFullfilled ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : 'none'}
      />
    </Flex>
  )
}

export default BeerTasteSelection
