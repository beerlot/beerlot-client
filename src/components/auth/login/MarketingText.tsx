import { Box, Text, VStack, Highlight } from '@chakra-ui/react'
import React from 'react'

const MarketingText = () => {
  return (
    <Box w='full' pt={'32px'} >
      <VStack gap={'0px'} textStyle={'h1'} textColor={'black.200'} align='flex-start'>
        <Box>
          <Highlight
            query={'3초만에'}
            styles={{
              width: '75px',
              height: '20px',
              bg: 'yellow.200',
            }}
          >
            3초만에
          </Highlight>
          {' '}
          <Text as='span'>로그인하고</Text>
          {' '}
        </Box>
        <Text>비어랏과 함께해요!</Text>
      </VStack>
    </Box>
  )
}

export default MarketingText
