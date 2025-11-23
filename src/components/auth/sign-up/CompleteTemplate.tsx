import { Box, Center, Container, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { OrangeCheckCircleIcon } from '../../shared/CustomIcons/customIcons'
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
      <Center h='full' mt={'60px'} alignItems='center' flexDir='column' gap={'32px'}>
        <Icon as={OrangeCheckCircleIcon} w={'64px'} h={'64px'} />

        <VStack spacing={'12px'}>
          <Text textStyle='h1' textColor='black.100'>회원가입 완료!</Text>
          <VStack spacing={'16px'}>
            <VStack spacing={0}>
              <Text textStyle='h2_regular' textColor='gray.300'>
                {userInfo?.username}님,
              </Text>
              <Text textStyle='h2_regular' textColor='gray.300'>
                비어랏의 회원이 되어주셔서 고마워요 :)
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Center>
      <FloatingButton
        _hover={{}}
        boxShadow={'0px 8px 16px rgba(0, 0, 0, 0.3)'}
        onClick={handleClickComplete}
      >
        비어랏 시작하기!
      </FloatingButton>
    </>
  )
}

export default CompleteTemplate
