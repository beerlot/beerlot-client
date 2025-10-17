import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import BeerButton from '@/components/shared/Buttons/BeerButton'

const ContinueButton = ({ onClick }: { onClick: () => void }) => {
  const router = useRouter()
  const handleClick = () => {
    onClick()
    router.back()
  }
  return (
    <BeerButton onClick={handleClick} size='sm' variant='ghost' label='로그인 없이 계속하기' />
  )
}

export default ContinueButton
