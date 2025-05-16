import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

interface FloatingButtonProps extends ButtonProps {
  disabled?: boolean
  text?: string
  bgColor?: string
  textColor?: string
  boxShadow?: string | undefined
  onClick: () => void
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  text,
  disabled = false,
  bgColor,
  textColor,
  boxShadow,
  onClick,
  ...props
}) => {
  const router = useRouter()
  return (
    <Button
      onClick={onClick}
      isDisabled={disabled}
      boxShadow={boxShadow}
      pos='fixed'
      bottom='76px'
      left='50%'
      transform='translateX(-50%)'
      maxW='418px'
      w='calc(100% - 32px)'
      px='16px'
      bg={bgColor}
      borderRadius='10px'
      _disabled={{
        bg: bgColor,
        textColor: textColor,
        cursor: 'not-allowed',
      }}
      textColor={textColor}
      py={'10px'}
      zIndex={100}
      {...props}
    >
      <Text textStyle='h3'>{text}</Text>
    </Button>
  )
}

export default FloatingButton
