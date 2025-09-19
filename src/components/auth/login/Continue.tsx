import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const ContinueButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  return (
    <Text
      _hover={{
        cursor: 'pointer',
      }}
      onClick={handleClick}
      color='#61646B'
      textStyle='h4_bold'
      textAlign={'center'}
    >
      로그인 없이 계속하기
    </Text>
  )
}

export default ContinueButton
