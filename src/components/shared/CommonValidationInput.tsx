import {
  FormControl,
  FormHelperText,
  Input,
  Text,
  Flex,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
  input: string
  isValid: boolean
  isTouched?: boolean
  guideText?: string
  label?: string
  placeholder?: string
  maxLength?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const CommonValidationInput: React.FC<Props> = ({
  label = '닉네임',
  isValid,
  isTouched,
  guideText = '',
  placeholder = '닉네임은 9자 이내로 만들 수 있어요!',
  input = '닉네임은 9자 이내로 만들 수 있어요!',
  onChange,
  onBlur,
  maxLength,
}) => {
  const accentColor = !isTouched ? 'gray.200' : isValid ? 'blue.300' : 'red.100'
  const borderColor = !isTouched ? 'gray.200' : isValid ? 'blue.300' : 'red.100'
  return (
    <>
      <FormControl>
        <Text px='8px' textStyle='h5_medium' textColor='gray.300'>
          {label}
        </Text>
        <Input
        mt={1}
        h={'44px'}
          type='text'
          value={input ?? ''}
          placeholder={placeholder}
          _placeholder={{ textColor: 'gray.200', textStyle: 'h2' }}
          onChange={onChange}
          onBlur={onBlur}
          px={4}
          py={2.5}
          color='black.100'
          fontWeight={500}
          borderRadius='lg'
          border='1px solid'
          borderColor={borderColor}
          bg='white.100'
          _focusVisible={{ borderColor, boxShadow: 'none' }}
          _hover={{ borderColor }}
        />
        <Flex justify='space-between' align={'center'} px='8px'>
          {input !== null && (
            <FormHelperText marginTop={1} textStyle='h5_regular' textColor={accentColor}>
              {guideText}
            </FormHelperText>
          )}
          {maxLength && (
            <Text textStyle={'h5_regular'} marginTop={1} alignSelf={'flex-end'} textColor={!isValid ? 'red.100' : 'gray.300'} >
              {`(${input.length ?? 0}/${maxLength})`}
            </Text>
          )}
        </Flex>
      </FormControl>
    </>
  )
}

export default CommonValidationInput
