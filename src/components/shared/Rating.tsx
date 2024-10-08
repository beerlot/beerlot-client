import {
  ButtonProps,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'
import React from 'react'
import { EmptyStarIcon, FullStarIcon } from './CustomIcons/customIcons'

interface RatingProps {
  starSize?: number
  buttonSize?: IconButtonProps['size']
  styleProps?: FlexProps
  onClick?: (rate: number) => void
  _rate: number
  shouldRound?: boolean
  w?: ButtonProps['w']
  width?: ButtonProps['width']
  h?: ButtonProps['h']
  height?: ButtonProps['height']
}

export const Rating: React.FC<RatingProps> = ({
  starSize,
  buttonSize,
  styleProps,
  _rate,
  onClick,
  w,
  width,
  h,
  height,
  shouldRound = true,
}) => {
  const minW = w ?? width ?? undefined
  const minH = h ?? height ?? undefined
  const rate = shouldRound ? Math.round(_rate) : _rate

  if (!onClick) {
    return (
      <Flex {...styleProps}>
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <Icon
              key={star}
              as={star <= rate ? FullStarIcon : EmptyStarIcon}
              color={star <= rate ? 'orange.200' : 'gray.200'}
              fontSize={starSize ? `${starSize}px` : undefined}
              sx={{
                marginInlineStart: 0,
              }}
              minW={minW}
              w={minW}
              minH={minH}
              h={minH}
            />
          )
        })}
      </Flex>
    )
  }

  return (
    <Flex {...styleProps}>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <IconButton
            key={star}
            bg='initial'
            aria-label='star'
            fontSize={starSize ? `${starSize}px` : undefined}
            icon={
              star <= rate ? (
                <FullStarIcon color={'orange.200'} />
              ) : (
                <EmptyStarIcon color={'gray.200'} />
              )
            }
            onClick={onClick ? () => onClick(star) : undefined}
            sx={{
              marginInlineStart: 0,
            }}
            size={buttonSize}
            p={0}
            _hover={{}}
            _focus={{}}
            minW={minW}
            w={minW}
            minH={minH}
            h={minH}
          />
        )
      })}
    </Flex>
  )
}
