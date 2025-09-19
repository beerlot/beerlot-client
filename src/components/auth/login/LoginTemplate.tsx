import { Box, Center, Flex} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { LeftCloseRandom } from '../../shared/Headers/LeftCloseRandom'
import ContinueButton from './Continue'
import MarketingText from './MarketingText'
import SocialButton from './SocialButton'

const LoginTemplate = () => {
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }

  return (
    <Box>
      <Center pt={'12px'} flexDir='column'>
        <LeftCloseRandom onClose={handleClose} title='로그인' />
        <MarketingText />
        <Box pt={'48px'} pb={'85px'} w='100%'>
          <img src='/images/Login_img.png' alt='Login Image'  />
        </Box>
        <Flex justifyContent={'center'} flexDir={'column'} w='full' gap={'20px'}>
          <SocialButton />
          <ContinueButton />
        </Flex>
      </Center>
    </Box>
  )
}

export { LoginTemplate }
