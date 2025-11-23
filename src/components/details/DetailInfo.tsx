import { roundToDecimal } from '@/../utils/number'
import { Box, Center, HStack, Text, VStack, useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {
  useBeerDislikeMutation,
  useBeerLikeMutation,
} from '../../../hooks/query/useBeerLikeMutation'
import { useUserLikedBeersQuery } from '../../../hooks/query/useUserQuery'
import { CommonBeerImage } from '../shared/CommonBeerImage/CommonBeerImage'
import { LikeButton } from '../shared/LikeButton'
import { Rating } from '../shared/Rating'
import { useRouter } from 'next/router'

interface DetailInfoProps {
  beerName: string
  volume: number
  category: string
  country: string
  beerImg: string
  beerId: number
  rate: number | '-'
}

export const DetailInfo: React.FC<DetailInfoProps> = ({
  beerName,
  volume,
  category,
  country,
  beerImg,
  beerId,
  rate,
}) => {
  const [didPassStar, setDidPassStar] = useState(false)
  const rateToUse = rate === '-' ? 0 : roundToDecimal(rate)
  const toastId = 'test-toast'
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const userBeersQuery = useUserLikedBeersQuery(accessToken, undefined, {
    enabled: !!accessToken,
  })
  const router = useRouter()

  const likedBeerIds =
    userBeersQuery.data?.pages.flatMap((page) =>
      page.contents
        ?.map((beer) => beer.id)
        .filter((id): id is number => id !== undefined)
    ) ?? []

  const isLikedBeer = likedBeerIds?.includes(beerId)

  const likeBeerMutation = useBeerLikeMutation(accessToken, {
    onSuccess: () => {
      userBeersQuery.refetch()
    },
  })

  const dislikeBeerMutation = useBeerDislikeMutation(accessToken, {
    onSuccess: () => {
      userBeersQuery.refetch()
    },
  })

  const toastTitle = isLikedBeer
    ? '좋아요한 맥주에서 삭제했어요!'
    : '좋아요한 맥주에 추가했어요!'

  const toast = useToast({
    position: 'bottom',
    title: toastTitle,
    id: toastId,
    isClosable: true,
    duration: 3000,
    containerStyle: {
      margin: '8px',
    },
    render: () => (
      <Box
        mx='12px'
        py='8px'
        color='white'
        bg='blue.500'
        backgroundColor='black.200'
        borderRadius='5px'
      >
        <Text textStyle={'h3'} textColor='white' textAlign={'center'}>
          {toastTitle}
        </Text>
      </Box>
    ),
  })

  const handleClickLike = () => {
    if (!accessToken) {
      router.push('/login')
      return
    }
    toast()
    if (!isLikedBeer) {
      likeBeerMutation.mutate(beerId)
    } else {
      dislikeBeerMutation.mutate(beerId)
    }
  }

  return (
    <>
      {/* title */}
     
      {/* image  */}
      <Center pt={2} w='full' px='20px'>
        <CommonBeerImage
          width='350px'
          height='350px'
          src={beerImg}
          alt={`${beerName} image`}
          borderRadius='6px'
        />
      </Center>

      <VStack px='20px' py='12px' w='full' alignItems='flex-start' spacing='4px'>
        {/* panel - title row */}
        <HStack w='full' justifyContent='space-between' alignItems='center'>
          <Text textStyle='h1' textColor='black.100'>{beerName}</Text>
          <LikeButton
            isLiked={isLikedBeer}
            onClick={handleClickLike}
            w='24px'
            h='24px'
            fontSize={'20px'}
            cursor='pointer'
            aria-label='like button'
          />
        </HStack>
        {/* description - meta row */}
        <HStack alignItems='center' spacing='4px'>
          <Text textStyle='h2_regular' textColor='black.100'>
            {volume}%
          </Text>
          <Box w='2px' h='2px' bg='gray.300' borderRadius='full' />
          <Text textStyle='h2_medium' textColor='gray.300'>
            {category}
          </Text>
          <Box w='2px' h='2px' bg='gray.300' borderRadius='full' />
          <Text textStyle='h2_medium' textColor='gray.300'>
            {country}
          </Text>
        </HStack>
        <Center w='full' pt='20px'>
          <Rating
            _rate={rateToUse}
            starSize={40}
            styleProps={{
              gap: '16px',
            }}
          />
        </Center>
      </VStack>
    </>
  )
}
