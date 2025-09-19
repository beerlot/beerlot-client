import { useBeersQuery } from '@/../hooks/query/useBeerQuery'
import { Box, Center, Circle, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MIN_MAX_BEER_VOLUME_SLIDER } from '../../interface/static'
import { CategoryFilterListType, CategoryTitle } from '../../interface/types'
import { EmptyFilter, WhiteFilter } from '../../public/svg'
import { SearchFilterList } from '../../src/components/result/filter/search-filter-list/SearchFilterList'
import SearchInput from '../../src/components/search/SearchInput'
import { BeerSortType } from '../../types/common'
import { SearchResult } from '@/components/search/SearchResult'
import { Analytics } from '../../src/utils/analytics'
import CommonPageLayout from '../../src/components/shared/CommonPageLayout'

const SearchResultPage = () => {
  const router = useRouter()
  const { query } = router.query

  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(true)
  // TODO: refactor filter into 1 object data
  const [selectedFilters, setSelectedFilter] = useState<
    CategoryFilterListType[]
  >([
    {
      tags: [BeerSortType.MOST_LIKES],
      title: CategoryTitle.SORT_CRITERIA,
    },
  ])

  const _selectedSort = selectedFilters.find(
    (filter) => filter.title === CategoryTitle.SORT_CRITERIA
  )?.tags

  const selectedSort = _selectedSort
    ? (_selectedSort[0] as BeerSortType)
    : BeerSortType.MOST_LIKES

  const _selectedBeerTypes = selectedFilters.find(
    (filter) => filter.title === CategoryTitle.BEER_TYPE
  )?.tags

  const _selectedCountries = selectedFilters.find(
    (filter) => filter.title === CategoryTitle.BEER_COUNTRY
  )?.tags

  const selectedBeerTypes = _selectedBeerTypes
    ? (_selectedBeerTypes as number[])
    : []

  const selectedCountries = _selectedCountries
    ? (_selectedCountries as string[])
    : []

  const [beerVolume, setBeerVolume] = useState<number[]>(
    MIN_MAX_BEER_VOLUME_SLIDER
  )
  const handleChangeBeerVolume = (value: number[]) => {
    setBeerVolume(value)
  }
  const SearchBeerQuery = useBeersQuery({
    keyword: typeof query === 'string' ? query : '',
    sort: selectedSort,
    categories: selectedBeerTypes,
    countries: selectedCountries,
    volume_min: beerVolume[0],
    volume_max: beerVolume[1],
  })

  useEffect(() => {
    SearchBeerQuery.refetch()
  }, [selectedFilters, beerVolume])

  useEffect(() => {
    if (typeof query === 'string' && query) {
      const beerNames = SearchBeerQuery.data?.contents?.map(beer => beer.name) || []
      Analytics.search(query, beerNames)
    }
  }, [query, SearchBeerQuery.data])

  useEffect(() => {
    // Track filter applications
    if (SearchBeerQuery.data?.contents) {
      const beerNames = SearchBeerQuery.data.contents.map(beer => beer.name)
      
      // Track sort filter
      if (selectedSort) {
        Analytics.viewFilteredItems('sort', selectedSort, beerNames)
      }
      
      // Track beer type filter
      if (selectedBeerTypes.length > 0) {
        Analytics.viewFilteredItems('beer_type', selectedBeerTypes.join(','), beerNames)
      }
      
      // Track country filter
      if (selectedCountries.length > 0) {
        Analytics.viewFilteredItems('country', selectedCountries.join(','), beerNames)
      }
      
      // Track volume filter
      if (beerVolume[0] !== MIN_MAX_BEER_VOLUME_SLIDER[0] || beerVolume[1] !== MIN_MAX_BEER_VOLUME_SLIDER[1]) {
        Analytics.viewFilteredItems('volume', `${beerVolume[0]}-${beerVolume[1]}`, beerNames)
      }
    }
  }, [selectedFilters, beerVolume, SearchBeerQuery.data])

  const handleFocus = () => {
    router.push('/search')
  }

  const handleClickToggle = () => {
    setIsFilterListOpen(!isFilterListOpen)
  }

  const handleClickTag = (
    targetTitle: CategoryTitle,
    targetTag: string | number
  ) => {
    const isSingleMode = targetTitle === CategoryTitle.SORT_CRITERIA
    const selectedObjList = selectedFilters.find(
      (item) => item.title === targetTitle
    )

    if (selectedObjList === undefined) {
      setSelectedFilter([
        ...selectedFilters,
        { title: targetTitle, tags: [targetTag] },
      ])

      return
    }

    if (isSingleMode) {
      const newSelectedFilter = selectedFilters.map((obj) => {
        if (obj.title === targetTitle) {
          return { title: targetTitle, tags: [targetTag] }
        }
        return obj
      })
      setSelectedFilter(newSelectedFilter)

      return
    }

    const isSelectedTag = selectedObjList.tags.includes(targetTag)
    if (isSelectedTag) {
      const newSelectedTagList = selectedObjList.tags.filter(
        (tag) => tag !== targetTag
      )
      const newSelectedFilter = selectedFilters.map((obj) => {
        if (obj.title === targetTitle) {
          return { title: targetTitle, tags: [...newSelectedTagList] }
        }
        return obj
      })
      setSelectedFilter(newSelectedFilter)
      return
    }

    const newSelectedTagList = [...selectedObjList.tags, targetTag]
    const newSelectedFilter = selectedFilters.map((obj) => {
      if (obj.title === targetTitle) {
        return { title: targetTitle, tags: [...newSelectedTagList] }
      }
      return obj
    })
    setSelectedFilter(newSelectedFilter)
  }

  return (
    <CommonPageLayout>
      <Box w='full' h='100vh' bg='gray.100' overflowY='scroll'>
        <Container p={'0px'} minH={'100vh'} bg='white' maxW='450px'>
          <Box h='full'>
            <Flex gap='10px' alignItems='center' mb='10px' cursor={'pointer'}>
              <SearchInput onFocus={handleFocus} autoFocus={false} />
              <Circle size='31px' bg='blue.100' onClick={handleClickToggle}>
                {isFilterListOpen ? <WhiteFilter /> : <EmptyFilter />}
              </Circle>
            </Flex>

            <SearchFilterList
              selectedFilters={selectedFilters}
              isFilterListOpen={isFilterListOpen}
              onClickToggle={handleClickToggle}
              onClickTag={handleClickTag}
              beerVolume={beerVolume}
              onChangeBeerVolume={handleChangeBeerVolume}
            />

            <Center>
              <SearchResult
                loading={SearchBeerQuery.isLoading || SearchBeerQuery.isFetching}
                beers={SearchBeerQuery.data?.contents}
              />
            </Center>

            <Box h='64px' />
          </Box>
        </Container>
      </Box>
    </CommonPageLayout>
  )
}

export default SearchResultPage
