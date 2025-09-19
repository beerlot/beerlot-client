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
    <Box w='full' h='100vh' bg='gray.100' overflowY='scroll'>
      <Container p={'0px'} minH={'100vh'} bg='white' maxW='450px' mx='auto'>
        {showHeader && <LeftBackTItleRightBell />}
        <Box {...(withContentPadding ? { py: '12px', px: '20px' } : {})}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default CommonPageLayout 