import { Center, Text } from '@chakra-ui/react'

export const EmptyReviewsList = () => {
  return (
    <Center
      gap={2}
      borderRadius={8}
      bg={'white'}
      flexDir={'column'}
      py={5}
      mt={6}
      mx={5}
    >
      <Text textStyle={'h2_bold'}>아직 작성된 리뷰가 없어요😢</Text>
      <Text textStyle={'h3'} textColor={'gray.300'}>
        첫번째 리뷰의 주인공이 되어주실래요?
      </Text>
    </Center>
  )
}