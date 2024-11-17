import {
  BeerCard,
  BeerCardBody,
  BeerCardFooter,
  BeerCategoryTag,
  BeerCategoryTagLabel,
  BeerCountryText,
  BeerNameText,
} from '@components/shared/Card/BeerCardItem'
import { Box, HStack } from '@chakra-ui/react'
import { CommonBeerImage } from '@components/shared/CommonBeerImage/CommonBeerImage'
import React, { useCallback, useState } from 'react'
import { BeerType } from '../../../../types/beer'
import { LikeButton } from '@components/shared/LikeButton'
import {
  useBeerDislikeMutation,
  useBeerLikeMutation,
} from '../../../../hooks/query/useBeerLikeMutation'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export const RecommendBeerCard = ({
  item,
  onClick,
  selected,
}: {
  onClick: () => void
  selected: undefined | boolean
  item: BeerType
}) => {
  const [localLiked, setLocalLiked] = useState(false)
  const accessToken = Cookies.get('beerlot-oauth-auth-guest') ?? ''

  const likeBeerMutation = useBeerLikeMutation(accessToken)
  const dislikeBeerMutation = useBeerDislikeMutation(accessToken)

  const handleClickBeerCard = () => {
    handleClickLike()
    onClick()
  }

  const handleClickLike = () => {
    if (item.id === undefined) return
    if (localLiked) {
      dislikeBeerMutation.mutate(item.id)
    } else {
      likeBeerMutation.mutate(item.id)
    }
    setLocalLiked(!localLiked)
  }

  return (
    <BeerCard
      mt={1}
      w='full'
      borderColor={'orange.200'}
      cursor='pointer'
      onClick={handleClickBeerCard}
      filter={
        selected ? 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.3))' : 'none'
      }
      bg={selected ? 'orange.200' : 'white.100'}
    >
      <BeerCardBody w='full' h='full' position={'relative'} border='orange.200'>
        <Box position='relative' borderRadius={6}>
          {item.image_url && (
            <CommonBeerImage
              src={item.image_url}
              alt={item.name}
              width='175px'
              height='120px'
              objectFit='cover'
              style={{ borderRadius: '6px' }}
            />
          )}
        </Box>
        <Box position='absolute' top={0} right={0}>
          <LikeButton
            isLiked={localLiked}
            onClick={handleClickLike}
            h={7}
            isControlled={true}
            aria-label='like button'
          />
        </Box>
      </BeerCardBody>
      <BeerCardFooter>
        <BeerNameText>{item.name}</BeerNameText>
        <HStack>
          <BeerCountryText borderRadius='full' country={item.origin_country} />
          <BeerCategoryTag bg={selected ? 'white.100' : 'orange.200'}>
            <BeerCategoryTagLabel
              textColor={selected ? 'orange.200' : 'white.100'}
            >
              {item.category?.name}
            </BeerCategoryTagLabel>
          </BeerCategoryTag>
        </HStack>
      </BeerCardFooter>
    </BeerCard>
  )
}
