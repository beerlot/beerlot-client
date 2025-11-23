import React from 'react'
import { Flex, Box, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { BeerlotLogoDefault } from '../../../public/svg'

interface HeaderProps {
  children?: React.ReactNode
  showBack?: boolean
  center?: React.ReactNode
  onBack?: () => void
}

export const Header: React.FC<HeaderProps> = ({
  children,
  showBack = true,
  center,
  onBack,
}) => {
  const router = useRouter()
  const handleBack = () => {
    if (onBack) onBack()
    else router.back()
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
      <Box w='40px' h='40px' display='flex' alignItems='center' justifyContent='flex-start'>
        {showBack && (
          <IconButton
            size='sm'
            w='32px'
            h='32px'
            p={0}
            bg='transparent'
            _focus={{}}
            icon={<ChevronLeftIcon boxSize={6} />}
            aria-label='Back'
            onClick={handleBack}
            variant='ghost'
          />
        )}
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center'>
        {center ?? <BeerlotLogoDefault />}
      </Box>
      <Box w='40px' h='40px' display='flex' alignItems='center' justifyContent='center'>
        {children}
      </Box>
    </Flex>
  )
}


