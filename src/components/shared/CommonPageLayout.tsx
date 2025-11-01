import React from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import { Header } from './Header'

interface CommonPageLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  withContentPadding?: boolean
  headerRight?: React.ReactNode
}

const CommonPageLayout: React.FC<CommonPageLayoutProps> = ({ 
  children, 
  showHeader = true,
  withContentPadding = true,
  headerRight,
}) => {
  return (
    <Box w='full' minH='100vh' background={'gray.100'}>
      <Container p={'0px'} minH='100vh' h='full' bg='white' maxW='450px' borderLeft='1px solid' borderLeftColor={'gray.100'} borderRight='1px solid' borderRightColor={'gray.100'}>
        {showHeader && <Header>{headerRight}</Header>}
        <Box {...(withContentPadding ? { py: '12px', px: '20px' } : {})} pb={'42px'}>
          {children}
        </Box>
        <Box h={10} />
      </Container>
    </Box>
  )
}

export default CommonPageLayout 