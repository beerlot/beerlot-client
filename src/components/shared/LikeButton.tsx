import { EmptyHeart, FullHeart } from '@/../public/svg'
import { IconButton, IconButtonProps, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface LikeButtonProps extends IconButtonProps {
  isLiked: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isControlled?: boolean
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  isLiked,
  onClick,
  isControlled = false,
  ...props
}) => {
  const [localLiked, setLocalLiked] = useState(isLiked)

  useEffect(() => {
    setLocalLiked(isLiked)
  }, [isLiked])

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
      icon={
        displayLiked ? <FullHeart /> : <EmptyHeart />
      }
      fontSize={'28px'}
      _hover={{}}
      _active={{}}
      p={0}
      bg='transparent'
      {...props}
    />
  )
}
