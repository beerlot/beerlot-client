import {
  singleBeerFetchKey,
  useRecommendedBeersQuery,
  useTopBeersQuery,
} from '@/../hooks/query/useBeerQuery'
import { fetchSingleBeerInfoApi } from '@/api/beers/api'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useQueries } from 'react-query'
import { LANGUAGE_TYPE } from '../../../interface/types'
import { CommonBeersList } from './CommonBeersList/CommonBeersList'
import { LoggedInBeersList } from './LoggedInBeersList/LoggedInBeersList'
import SearchInput from '@/components/search/SearchInput'
import { WelcomeTextContent } from './WelcomeText'
import { Footer } from '@components/shared/Footer'

interface HomeTemplateProps {
  username?: string
}
const HomeTemplate: React.FC<HomeTemplateProps> = ({ username }) => {
  const router = useRouter()
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''

  const topBeersQuery = useTopBeersQuery({})
  const { data: recommendBeers } = useRecommendedBeersQuery(accessToken, {
    enabled: !!accessToken,
  })

  // Ensure recommendBeers.id exists and fallback to empty array if not
  const recommendedBeersIdList =
    recommendBeers?.id && recommendBeers.id.length > 0 ? recommendBeers.id : []

  // Fetch data for each beer ID
  const recommendedBeersData = useQueries(
    recommendedBeersIdList.map((beerId) => ({
      queryKey: singleBeerFetchKey(beerId),
      queryFn: () =>
        fetchSingleBeerInfoApi({
          id: beerId,
          language: LANGUAGE_TYPE.KR,
        }),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !!beerId,
    }))
  ).map((query, index) => {
    return {
      id: recommendedBeersIdList[index],
      ...query.data,
      isLoading: query.isLoading,
    }
  })
  const recommendedBeerListLoading = recommendedBeersData.some(
    (query) => query.isLoading
  )

  useEffect(() => {
    topBeersQuery.refetch()
  }, [])

  return (
    <Box w='full' bg='gray.100'>
      <Container p={'0px'} bg='white' maxW='450px' minH={'100vh'}>
        <Box>

          <WelcomeTextContent username={username} />

          <Box py={'34px'}>
            <SearchInput
              onFocus={() => router.push('/search')}
              readOnly
            />
          </Box>

          {username ? (
            <LoggedInBeersList
              userName={username}
              topBeersList={topBeersQuery.data}
              topBeersLoading={topBeersQuery.isLoading}
              recommendedBeerList={recommendedBeersData}
              recommendedBeerListLoading={recommendedBeerListLoading}
            />
          ) : (
            <CommonBeersList
              beersList={topBeersQuery.data}
              loading={topBeersQuery.isFetching || topBeersQuery.isLoading}
            />
          )}
        </Box>
        <Box h={10} />
      </Container>
    </Box>
  )
}

export default HomeTemplate
