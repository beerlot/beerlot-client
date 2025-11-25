import { Box, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import useKeyboard from '@/../hooks/useKeyboard'
import { SearchBarList } from '../home/Search/SearchBarList'
import { Analytics } from '../../utils/analytics'

const SearchBarTemplate = () => {
  const router = useRouter()

  const { isEnterKey } = useKeyboard()
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEnterKey(e)) {
      router.push(`/result?query=${e.target.value}`)
    }
  }

  const handleClickItem = (name: string, id?: number) => {
    if (id === undefined) return
    Analytics.search(name, [name]) // Track search when user clicks on a beer
    router.push(`/result/details?id=${id}&name=${name}`)
  }

  return (
    <VStack spacing={0}>
      <SearchBarList
        handleClickItem={handleClickItem}
        onKeyPress={handleKeyPress}
        autoFocus={true}
      />
    </VStack>
  )
}

export default SearchBarTemplate
