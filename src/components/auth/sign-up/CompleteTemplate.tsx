import { Box, Center, Container, Flex, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { OrangeCheckCircle } from '../../../../public/svg'
import FloatingButton from '../../shared/FloatingButton'
import { SignUpType } from '../../../../interface/types'
import { Analytics, getCurrentDate } from '../../../utils/analytics'

interface CompleteTemplateProps {
  userInfo: SignUpType
}

const CompleteTemplate: React.FC<CompleteTemplateProps> = ({ userInfo }) => {
  const router = useRouter()
  const handleClickComplete = () => {
    // Track signup completion with current date and method (we'll need to get the method from context)
    Analytics.signUp(getCurrentDate(), 'social') // Default to social since we don't have the specific method here
    router.push(`/`)
  }

  return (
    <>
      <Center h={'full'} flexDir='column'>
        <Icon as={OrangeCheckCircle} w={'80px'} h={'80px'} />
        <Text mt={'24px'} textStyle={'h1'} textColor='black'>
          회원가입 완료!
        </Text>
        <Box mt={'24px'}>
          <Text display='inline' textStyle={'h2_bold'} textColor='orange.200'>
            {userInfo?.username}
          </Text>
          <Text
            display='inline'
            mt={'24px'}
            textStyle={'h2_bold'}
            textColor='black'
          >
            님,
          </Text>
        </Box>
        <Text mt={'8px'} textStyle={'h2_bold'} textColor='black'>
          비어랏의 회원이 되어주셔서 감사해요🙇‍♀️
        </Text>
        <Text
          display='inline'
          mt={'24px'}
          textStyle={'h4'}
          textColor='gray.300'
        >
          맥주 리뷰 작성, 마이페이지 등 다양한 기능을 만나보세요 :)
        </Text>
      </Center>
      <FloatingButton
        onClick={handleClickComplete}
        bgColor={'orange.200'}
        textColor={'white.100'}
        _hover={{}}
        boxShadow={'0px 8px 16px rgba(0, 0, 0, 0.3)'}
      >비어랏 시작하기!</FloatingButton>
    </>
  )
}

export default CompleteTemplate
