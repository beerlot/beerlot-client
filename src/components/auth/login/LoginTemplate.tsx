import { Box, Center, Flex, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ContinueButton from './Continue'
import MarketingText from './MarketingText'
import SocialButton from './SocialButton'
import BottomDrawer from '../../shared/BottomDrawer'

const LoginTemplate = () => {
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleContinue = () => {
    console.log('Continue button clicked')
    onClose()
  }

  const handleOpenDrawer = () => {
    console.log('Opening BottomDrawer')
    onOpen()
  }

  return (
    <Box>
      <Center flexDir='column'>
        <MarketingText />
        <Box pt={'48px'} pb={'85px'} w='100%'>
          <img src='/images/Login_img.png' alt='Login Image'  />
        </Box>
        <Flex justifyContent={'center'} flexDir={'column'} w='full' gap={'20px'}>
          <SocialButton />
          <ContinueButton onClick={handleOpenDrawer} />
        </Flex>
        <BottomDrawer
          isOpen={isOpen}
          onClose={onClose}
          headerLabel='정말로 나가실 건가요?'
          bodyLabel='딱 3초면 더 다양한 기능을 사용할 수 있어요!'
          confirmLabel='계속하기'
          cancelLabel='나가기'
          onConfirm={handleContinue}
          onCancel={handleClose}
        />
      </Center>
    </Box>
  )
}

export { LoginTemplate }
