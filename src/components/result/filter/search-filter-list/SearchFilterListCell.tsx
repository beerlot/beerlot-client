import { Box, HStack, StackProps, Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import {
  MIN_MAX_BEER_VOLUME_SLIDER,
  MOCK_CATEGORY_FILTER_TITLE,
} from '../../../../../interface/static'
import {
  CategoryFilterListType,
  CategoryTitle,
} from '../../../../../interface/types'
import { VolumeSlider } from '../../../shared/Filters/VolumeSlider'
import { SearchFilterTag } from '../SearchFilterTag/SearchFilterTag'
import { isBeerVolumeWithinRange } from '@/components/home/LoggedInBeersList/beer.service'

export const SearchFilterRowWrapper: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <HStack
      w='full'
      px='20px'
      py='4px'
      borderBottom={'1px solid'}
      borderBottomColor='gray.200'
      alignItems='center'
      {...props}
    >
      {children}
    </HStack>
  )
}

interface OptionsWrapperProps extends StackProps {
  withRightGradient?: boolean
}

export const SearchFilterRowOptionsWrapper: React.FC<OptionsWrapperProps> = ({
  children,
  withRightGradient = false,
  ...props
}) => {
  return (
    <Box position='relative' flex='1' w='full'>
      <HStack
        w='full'
        gap={'8px'}
        overflowX={'auto'}
        className={'hide-scrollbar'}
        alignItems='center'
        {...props}
      >
        {children}
      </HStack>
      {withRightGradient && (
        <Box
          position='absolute'
          right={0}
          top={0}
          h='28px'
          w='14px'
          bgGradient='linear(to-l, white.100, rgba(255,255,255,0))'
          pointerEvents='none'
        />
      )}
    </Box>
  )
}

interface SearchFilterRangeRowProps {
  beerVolume: number[]
  onChange: (value: number[]) => void
}

export const SearchFilterRangeRow: React.FC<SearchFilterRangeRowProps> = ({
  beerVolume,
  onChange,
}) => {
  return (
    <>
      <Text mr='4px' textStyle={'h4'} textColor='gray.300'>
        {beerVolume[0]}%
      </Text>
      <VolumeSlider
        min={MIN_MAX_BEER_VOLUME_SLIDER[0]}
        max={MIN_MAX_BEER_VOLUME_SLIDER[1]}
        value={beerVolume}
        onChange={onChange}
        colorScheme='blue'
        w='full'
        trackColor='gray.200'
      />
      <Text mr='4px' textStyle={'h4'} textColor='gray.300'>
        {beerVolume[1]}%
      </Text>
    </>
  )
}

interface RowOptionProps extends TextProps {
  isSelected?: boolean
}

export const SearchFilterRowOption: React.FC<RowOptionProps> = ({
  children,
  isSelected = false,
  ...props
}) => {
  return (
    <Box
      h='28px'
      px='8px'
      borderRadius='99px'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexShrink={0}
      cursor='pointer'
    >
      <Text
        textStyle={isSelected ? 'h5_bold' : 'h5_medium'}
        color={isSelected ? 'orange.300' : 'gray.400'}
        {...props}
      >
        {children}
      </Text>
    </Box>
  )
}
interface BeerSearchCategoriesForClosedFilterProps {
  isFilterListOpen: boolean
  selectedFilters: CategoryFilterListType[]
  onClickToggle: () => void
  beerVolume: number[]
}

export const BeerSearchCategoriesForClosedFilter: React.FC<
  BeerSearchCategoriesForClosedFilterProps
> = ({ isFilterListOpen, selectedFilters, onClickToggle, beerVolume }) => {
  return (
    <HStack>
      {MOCK_CATEGORY_FILTER_TITLE.map((title) => {
        return (
          <SearchFilterTag
            key={title}
            title={title}
            selectedFilters={selectedFilters}
            onClick={onClickToggle}
            isFilterListOpen={isFilterListOpen}
            isSelected={
              title === CategoryTitle.BEER_DEGREE
                ? isBeerVolumeWithinRange(beerVolume)
                : undefined
            }
          />
        )
      })}
    </HStack>
  )
}
