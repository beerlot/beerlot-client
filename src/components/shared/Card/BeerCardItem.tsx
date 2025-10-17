import {
  Card,
  CardBody,
  CardBodyProps,
  CardFooter,
  CardFooterProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Tag,
  TagLabel,
  TagLabelProps,
  Text,
  TextProps,
  Image as ChakraImage,
  Box,
  HStack,
  AspectRatio,
} from '@chakra-ui/react'
import React from 'react'
import { BeerResponseType } from '../../../../types/beer'
import { CommonBeerImage } from '../CommonBeerImage/CommonBeerImage'
import { getFlagByCountryName } from '@/components/home/LoggedInBeersList/beer.service'
interface BeerCardItemProps extends CardProps {
  beerInfo: BeerResponseType
  children: React.ReactNode | React.ReactNode[]
  size?: 'sm' | 'md' | 'lg'
}

export const BeerCardItem: React.FC<BeerCardItemProps> = ({
  beerInfo,
  size = 'md',
  ...props
}) => {
  const { name, origin_country, image_url, category } = beerInfo
  const sizeConfig = {
    sm: {
      cardPadding: '6px',
      cardRadius: '8px',
      cardWidth: '112px',
      imageWidth: '100%',
      imageHeight: '96px',
      imageRadius: '6px',
      nameTextStyle: 'h5_medium' as const,
      metaTextStyle: 'h5_regular' as const,
      metaRowPx: '4px',
    },
    md: {
      cardPadding: '4px',
      cardRadius: '12px',
      cardWidth: 'fit-content',
      imageWidth: '128px',
      imageHeight: '128px',
      imageRadius: '8px',
      nameTextStyle: 'h2_medium' as const,
      metaTextStyle: 'h5_regular' as const,
      metaRowPx: '0px',
    },
    lg: {
      cardPadding: '4px',
      cardRadius: '12px',
      cardWidth: 'fit-content',
      imageWidth: '160px',
      imageHeight: '160px',
      imageRadius: '8px',
      nameTextStyle: 'h2_medium' as const,
      metaTextStyle: 'h5_regular' as const,
      metaRowPx: '0px',
    },
  } as const
  const conf = sizeConfig[size]
  return (
    <BeerCard size={size} p={conf.cardPadding} borderRadius={conf.cardRadius} w={conf.cardWidth} {...props}>
      <BeerCardBody>
        <Box position='relative' w={conf.imageWidth}>
          <AspectRatio ratio={1} w='full'>
            <Box
              w='full'
              h='full'
              overflow='hidden'
              borderRadius={conf.imageRadius}
              border={size === 'md' || size === 'lg' ? '1px solid' : undefined}
              borderColor={size === 'md' || size === 'lg' ? 'gray.200' : undefined}
            >
              {image_url && (
                <CommonBeerImage
                  src={image_url}
                  alt={name}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                />
              )}
            </Box>
          </AspectRatio>
        </Box>
      </BeerCardBody>
      <BeerCardFooter>
        <BeerNameText textStyle={conf.nameTextStyle}>{name}</BeerNameText>
        <HStack w='full' gap='4px' px={conf.metaRowPx} alignItems='center'>
          <BeerCountryText textStyle={conf.metaTextStyle} country={origin_country} display='inline' />
          <Text textStyle={conf.metaTextStyle} textColor='gray.300'>
            {category?.name}
          </Text>
        </HStack>
      </BeerCardFooter>
    </BeerCard>
  )
}

// card
interface BeerCardProps extends CardProps {
  children: React.ReactNode | React.ReactNode[]
  size?: 'sm' | 'md' | 'lg'
}

export const BeerCard: React.FC<BeerCardProps> = ({ children, size = 'md', ...props }) => {
  const baseBorder = '1px solid'
  const baseBorderColor = 'gray.200'
  const baseBg = 'white.100'
  const hoverBg = 'yellow.200'
  const hoverBorder = 'yellow.400'
  return (
    <Card
      borderRadius={size === 'sm' ? '8px' : '12px'}
      border={baseBorder}
      borderColor={baseBorderColor}
      bg={baseBg}
      boxShadow='none'
      w='fit-content'
      style={{ marginInlineStart: 0 }}
      p={2}
      cursor='pointer'
      flexShrink={0}
      _hover={{ bg: hoverBg, borderColor: hoverBorder, boxShadow: 'none' }}
      {...props}
    >
      {children}
    </Card>
  )
}

// header
interface BeerCardHeaderProps extends CardHeaderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const BeerCardHeader: React.FC<BeerCardHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <CardHeader p={0} {...props}>
      {children}
    </CardHeader>
  )
}

// body
interface BeerCardBodyProps extends CardBodyProps {
  children: React.ReactNode | React.ReactNode[]
}

export const BeerCardBody: React.FC<BeerCardBodyProps> = ({
  children,
  ...props
}) => {
  return (
    <CardBody p={0} {...props}>
      {children}
    </CardBody>
  )
}

// footer
interface BeerCardFooterProps extends CardFooterProps {
  children: React.ReactNode | React.ReactNode[]
}

export const BeerCardFooter: React.FC<BeerCardFooterProps> = ({
  children,
  ...props
}) => {
  return (
    <CardFooter mt={1.5} p={0} {...props} flexDir='column'>
      {children}
    </CardFooter>
  )
}

// footer
interface BeerNameTextProps extends TextProps {
  children?: string
}

export const BeerNameText: React.FC<BeerNameTextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text {...props} textColor='black.100'>
      {children}
    </Text>
  )
}

// footer
interface BeerCountryTextProps extends TextProps {
  country?: string
}

export const BeerCountryText: React.FC<BeerCountryTextProps> = ({
  country,
  children,
  ...props
}) => {
  return (
    <Text {...props} textColor='black.100'>
      {getFlagByCountryName(country ?? '')}
      {children}
    </Text>
  )
}

// tag
interface BeerCategoryTagProps extends TextProps {
  children: React.ReactNode | React.ReactNode[]
}

export const BeerCategoryTag: React.FC<BeerCategoryTagProps> = ({
  children,
  ...props
}) => {
  return (
    <Tag
      borderRadius={20}
      bg='orange.300'
      display='flex'
      alignItems={'center'}
      justifyContent={'center'}
      p={'0px 5px'}
      textStyle={'h4'}
      minH={'17px'}
      lineHeight={'16px'}
      ml={1.5}
      {...props}
    >
      {children}
    </Tag>
  )
}

// tag label
interface BeerCategoryTagLabelProps extends TagLabelProps {
  children?: string
}

export const BeerCategoryTagLabel: React.FC<BeerCategoryTagLabelProps> = ({
  children,
  ...props
}) => {
  return (
    <TagLabel textStyle={'h4'} textColor='white.100' {...props}>
      {children}
    </TagLabel>
  )
}
