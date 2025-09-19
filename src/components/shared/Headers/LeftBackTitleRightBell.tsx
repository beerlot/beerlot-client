import { IconButton, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { BeerlotLogoDefault } from '../../../../public/svg'
import { Flex, Box } from '@chakra-ui/react'

export const LeftBackTItleRightBell = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return (
    <Flex
      position='relative'
      w='full'
      h='48px'
      py='4px'
      px='20px'
      justifyContent='space-between'
      alignItems='center'
    >
      <IconButton
        icon={<ChevronLeftIcon w={4} h={4} />}
        aria-label='Back'
        onClick={handleBack}
        variant='ghost'
      />
      <BeerlotLogoDefault />
      <Box w='36px' h='36px' />
    </Flex>
  )
}
