import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'

const commonBeerImage = '/images/beer-preview-default-image.jpg'

interface RequiredImageProps extends ImageProps {
  width: string | number
  height: string | number
}

const CommonBeerImage: React.FC<RequiredImageProps> = ({ 
  width,
  height,
  ...props 
}) => {
  return (
    <Image
      src={props.src ?? commonBeerImage}
      fallbackSrc={commonBeerImage}
      alt={props?.alt ?? 'beer image'}
      width={width}
      height={height}
      objectFit="contain"
      {...props}
    />
  )
}

export { CommonBeerImage }
