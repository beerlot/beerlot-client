import { HStack, Link, Text, VStack, Box, Container } from '@chakra-ui/react'
import {
  BottomNavDictionaryIcon,
  BottomNavFeedIcon,
  BottomNavHomeIcon,
  BottomNavProfileIcon,
  BottomNavSearchIcon,
} from './CustomIcons/customIcons'
import { useRouter } from 'next/router'

export const BottomNav = () => {
  const router = useRouter()
  const navMenu = [
    { key: 'home', label: '홈', icon: BottomNavHomeIcon, url: '/' },
    { key: 'search', label: '검색', icon: BottomNavSearchIcon, url: '/search' },
    // TODO: 대백과 페이지 추가 시 주석 해제
    // { key: 'dictionary', label: '대백과', icon: BottomNavDictionaryIcon, url: '/dictionary' },
    { key: 'feed', label: '피드', icon: BottomNavFeedIcon, url: '/feed' },
    { key: 'account', label: '마이', icon: BottomNavProfileIcon, url: '/account' },
  ] as const

  return (
    <Box w='full' pos='fixed' bottom='0' left='0' right='0' bg='transparent' zIndex={1000}>
      <Container maxW='450px' p={0}>
        <HStack
          w='full'
          h='64px'
          py='8px'
          px='20px'
          bg='white.100'
          borderTop='1px solid'
          borderTopColor='gray.100'
          borderTopLeftRadius='16px'
          borderTopRightRadius='16px'
          boxShadow='0px -4px 6px rgba(34, 34, 34, 0.04)'
          justifyContent='center'
          alignItems='flex-start'
        >
          {navMenu.map((item) => {
            const isActive = router.pathname === item.url
            const iconColor = isActive ? 'black.100' : 'gray.400'
            const labelColor = isActive ? 'black.100' : 'gray.400'
            const Icon = item.icon
            return (
              <VStack
                key={item.key}
                flex='1'
                py='8px'
                spacing='2px'
                as={Link}
                href={item.url}
                _hover={{ textDecoration: 'none' }}
                alignItems='center'
                justifyContent='flex-start'
              >
                <Box color={iconColor} w='24px' h='24px'>
                  <Icon boxSize='24px' />
                </Box>
                <Text marginTop={0} textStyle='h5_medium' color={labelColor} lineHeight='none'>
                  {item.label}
                </Text>
              </VStack>
            )
          })}
        </HStack>
      </Container>
    </Box>
  )
}
