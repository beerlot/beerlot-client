import React from 'react'
import { Button, ButtonProps, Text } from '@chakra-ui/react'

export type BeerButtonSize = 'lg' | 'md' | 'sm'
export type BeerButtonVariant = 'primary' | 'primaryOutline' | 'neutralOutline' | 'ghost'

interface BeerButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
  size?: BeerButtonSize
  variant?: BeerButtonVariant
  label: string
}

const sizeStyles: Record<BeerButtonSize, { h: string; px: string; textStyle: string }> = {
  lg: { h: '48px', px: '24px', textStyle: 'h2_bold' }, // 16/24 bold
  md: { h: '40px', px: '16px', textStyle: 'h2_bold' }, // 16/24 bold
  sm: { h: '28px', px: '12px', textStyle: 'h5_bold' }, // 12/16 bold
}

const variantStyles: Record<BeerButtonVariant, ButtonProps> = {
  primary: {
    bg: 'yellow.400',
    color: 'white.100',
    _hover: { bg: 'yellow.400', opacity: 0.9 },
    _active: { opacity: 0.85 },
  },
  primaryOutline: {
    bg: 'white.100',
    color: 'yellow.400',
    border: '1px solid',
    borderColor: 'yellow.400',
    _hover: { bg: 'white.100' },
    _active: { bg: 'white.100' },
  },
  neutralOutline: {
    bg: 'white.100',
    color: 'gray.300',
    border: '1px solid',
    borderColor: 'gray.400',
    _hover: { bg: 'white.100' },
    _active: { bg: 'white.100' },
  },
  ghost: {
    bg: 'transparent',
    color: 'gray.300',
    _hover: { bg: 'transparent' },
    _active: { bg: 'transparent' },
  },
}

export const BeerButton: React.FC<BeerButtonProps> = ({
  size = 'md',
  variant = 'primary',
  label,
  isDisabled,
  ...props
}) => {
  const s = sizeStyles[size]
  const v = variantStyles[variant]

  const disabledStyles: ButtonProps = variant === 'primary'
    ? { opacity: 0.2, cursor: 'not-allowed' }
    : variant === 'primaryOutline'
    ? { opacity: 0.4, cursor: 'not-allowed' }
    : { opacity: 0.5, cursor: 'not-allowed' }

  return (
    <Button
      borderRadius={'99px'}
      h={s.h}
      px={s.px}
      {...v}
      {...(isDisabled ? disabledStyles : {})}
      _focusVisible={{ boxShadow: 'none' }}
      {...props}
    >
      <Text textStyle={s.textStyle}>{label}</Text>
    </Button>
  )
}

export default BeerButton
