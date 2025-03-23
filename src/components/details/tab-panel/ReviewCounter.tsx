import { Box, Text } from '@chakra-ui/react'

interface ReviewCountDisplayProps {
  reviewLength: number
}

export const ReviewCountDisplay: React.FC<ReviewCountDisplayProps> = ({
  reviewLength,
}) => {
  return (
    <Box>
      <Text textColor='black.100' as='span' textStyle={'h2_bold'}>
        리뷰{' '}
      </Text>
      <Text textColor='orange.200' as='span' textStyle={'h2_bold'}>
        {reviewLength}
      </Text>
    </Box>
  )
}
