import { Button, ButtonProps, Text } from '@chakra-ui/react'
import React from 'react'


const FloatingButton: React.FC<ButtonProps> = ({
  children, 
  ...props
}) => {
  return (
    <Button
    _hover={{}}
      pos='fixed'
      bottom='76px'
      left='50%'
      transform='translateX(-50%)'
      maxW='418px'
      w='calc(100% - 32px)'
      px='24px'
      bg={'orange.200'}
      borderRadius='99px'
      _disabled={{
        cursor: 'not-allowed',
        opacity: 1,
        boxShadow: 'none',
        bg: 'gray.200',
      }}
      h='48px'
      zIndex={100}
      {...props}
    >
      <Text fontSize='16px' fontWeight='semibold' lineHeight='24px' color={'white.100'}>
        {children}
      </Text>
    </Button>
  )
}

export default FloatingButton
