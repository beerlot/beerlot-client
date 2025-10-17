import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { SEARCH_BAR_PLACEHOLDER } from '../../../interface/static'
import { SearchGlass, WhiteCross } from '../../../public/svg'

interface SearchInputProps extends InputProps {
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoFocus?: boolean
  clearValue?: () => void
  hasValue?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  onFocus,
  onChange,
  onKeyPress,
  clearValue,
  autoFocus = false,
  hasValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      clearValue?.()
    }
  }
  const effectiveHasValue =
    typeof hasValue === 'boolean'
      ? hasValue
      : typeof rest.value === 'string' && (rest.value as string).length > 0 && !!clearValue

  return (
    <InputGroup display='flex' alignItems='center' justifyContent='center' w='full'>
      <Input
        ref={inputRef}
        onKeyPress={onKeyPress}
        h='40px'
        px='12px'
        pr={effectiveHasValue ? '36px' : '12px'}
        bg='blue.100'
        placeholder={SEARCH_BAR_PLACEHOLDER}
        onChange={onChange}
        borderRadius='32px'
        textColor='white'
        _placeholder={{ color: 'inherit' }}
        focusBorderColor='transparent'
        autoFocus={autoFocus}
        onFocus={onFocus}
        _hover={{}}
        fontSize='16px'
        lineHeight='20px'
        style={{
          fontSize: '16px',
          transform: 'scale(1)',
          WebkitTextSizeAdjust: '100%',
          WebkitAppearance: 'none',
          WebkitTapHighlightColor: 'transparent',
          minHeight: 'initial',
        }}
        {...rest}
      />
      <InputLeftElement h='full'>
        <Box color='white'>
          <SearchGlass />
        </Box>
      </InputLeftElement>
      {effectiveHasValue && (
        <InputRightElement h='full'>
          <Box
            as='button'
            type='button'
            aria-label='clear search'
            onClick={clearInput}
            w='20px'
            h='20px'
            borderRadius='full'
            bg='blue.200'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <WhiteCross />
          </Box>
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default SearchInput
