import { Box, Center } from '@chakra-ui/react'
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
      <Center pt={'50px'} flexDir='column' gap='106px' px={'24px'}>
        <LeftCloseRandom onClose={handleClose} title='로그인' />
        <MarketingText />
        <Center flexDir={'column'} w='full' gap={'20px'}>
          <SocialButton />
          <ContinueButton />
        </Center>
      </Center>
    </Box>
  )
}

export { LoginTemplate }
