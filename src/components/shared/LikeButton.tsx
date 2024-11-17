import { EmptyHeart, FullHeart } from '@/../public/svg'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import React, { useState } from 'react'

interface LikeButtonProps extends IconButtonProps {
  isLiked: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isControlled?: boolean
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  isLiked,
  onClick,
  isControlled,
  ...props
}) => {
  const [localLiked, setLocalLiked] = useState(isLiked)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isControlled) {
      setLocalLiked(!localLiked)
    }
    onClick?.(e)
  }

  const displayLiked = isControlled ? isLiked : localLiked
  return (
    <IconButton
      w='fit-content'
      minW='initial'
      onClick={handleClick}
      icon={displayLiked ? <FullHeart /> : <EmptyHeart />}
      cursor='pointer'
      fontSize={'28px'}
      _hover={{}}
      _active={{}}
      p={0}
      bg='transparent'
      {...props}
    />
  )
}
