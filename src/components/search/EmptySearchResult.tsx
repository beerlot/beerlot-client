import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react'
import { BeerButton } from '../shared/Buttons/BeerButton'
import React from 'react'
import Image from 'next/image'

interface EmptySearchResultProps {
  inputValue: string
}

const EmptySearchResult: React.FC<EmptySearchResultProps> = ({
  inputValue,
}) => {
  return (
    <VStack w='full' spacing='20px' alignItems='center' justifyContent='center' py='40px'>
      <VStack spacing='12px' alignItems='center'>
        <Box w='80px' h='80px'>
          <Image src='/images/missing_beer.png' width={80} height={80} alt='empty' />
        </Box>
        <VStack spacing='8px'>
          <Box>
            <Text textAlign='center' textStyle='h2_bold'>{`‘${inputValue}’`}</Text>
            <Text textAlign='center' textStyle='h2_regular'>검색 결과가 없어요 🤔</Text>
          </Box>
          <Text textAlign='center' textStyle='h3_regular' color='gray.300'>
            다른 키워드로 검색해보세요!
            <br />
            ex) OB라거 {'>'} 오비라거
          </Text>
        </VStack>
      </VStack>
      <Link href={'mailto:beerlot.site@gmail.com?subject=%EB%A7%A5%EC%A3%BC%20%EC%A0%9C%EB%B3%B4%20%EC%9A%94%EC%B2%AD'} _hover={{ textDecoration: 'none' }}>
        <BeerButton size='md' variant='primary' label='맥주 제보하기' as='span' />
      </Link>
    </VStack>
  )
}

export default EmptySearchResult
