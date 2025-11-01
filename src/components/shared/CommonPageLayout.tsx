import React from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import { LeftBackTItleRightBell } from './Headers/LeftBackTitleRightBell'

interface CommonPageLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  withContentPadding?: boolean
}

const CommonPageLayout: React.FC<CommonPageLayoutProps> = ({ 
  children, 
  showHeader = true,
  withContentPadding = true,
}) => {
  return (
    <Box w='full' minH='100vh' background={'gray.100'}>
      <Container p={'0px'} minH='100vh' h='full' bg='white' maxW='450px' borderLeft='1px solid' borderLeftColor={'gray.100'} borderRight='1px solid' borderRightColor={'gray.100'}>
        {showHeader && <LeftBackTItleRightBell />}
        <Box {...(withContentPadding ? { py: '12px', px: '20px' } : {})} pb={'42px'}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default CommonPageLayout 