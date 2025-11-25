import { VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSingleBeerFetchQuery } from '../../../hooks/query/useBeerQuery'
import { DetailInfo } from './DetailInfo'
import { DetailTabList } from './DetailTabList'
import { Analytics } from '../../utils/analytics'
import { useEffect } from 'react'

export const DetailTemplate = () => {
  const router = useRouter()
  const { id: beerId } = router.query
  const singleBeerFetch = useSingleBeerFetchQuery(Number(beerId))
  const beerInfo = singleBeerFetch.data

  useEffect(() => {
    if (beerInfo) {
      Analytics.viewItem([`${beerInfo.id}:${beerInfo.name}`])
    }
  }, [beerInfo])

  return (
    <VStack w='full'>
      {beerInfo && (
        <DetailInfo
          beerName={beerInfo?.name ?? ''}
          volume={beerInfo?.volume ?? 0}
          category={beerInfo?.category?.name ?? ''}
          country={beerInfo?.origin_country ?? ''}
          beerImg={beerInfo?.image_url ?? ''}
          beerId={beerInfo?.id}
          rate={beerInfo.rate === 'NaN' ? '-' : (beerInfo.rate ?? 0)}
        />
      )}
      {beerInfo && (
        <DetailTabList
          id={beerInfo.id}
          beerName={beerInfo?.name ?? ''}
          city={beerInfo?.origin_country ?? ''}
          brewary={beerInfo.brewery ?? ''}
          calories={beerInfo.calorie ?? 0}
          suitableGlass={'suitableGlass'}
          desc={beerInfo?.description ?? ''}
          buyFrom={beerInfo?.buy_from ?? []}
          rate={beerInfo.rate === 'NaN' ? '-' : (beerInfo.rate ?? 0)}
        />
      )}
    </VStack>
  )
}
