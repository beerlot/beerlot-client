import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react'
import {
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
} from '../../../pages/account/settings/info'
import { BeerLotFullIcon } from '@components/shared/CustomIcons/customIcons'

export const Footer = () => {
  return (
    <Center flexDir={'column'} pt={6} pb={4} bg={'gray.100'}>
      <Icon as={BeerLotFullIcon} w={'81px'} h={'16px'} />
      <Flex alignItems={'center'}>
        <Button as={'a'} href={TERMS_OF_SERVICE_URL} _hover={{}}>
          <Text color={'#61646B'} textStyle={'h4_regular'}>
            이용약관
          </Text>
        </Button>
        <Divider h={'16px'} borderColor={'gray.200'} orientation={'vertical'} />
        <Button as={'a'} href={PRIVACY_POLICY_URL} _hover={{}}>
          <Text color={'#61646B'} textStyle={'h4_bold'}>
            개인정보 처리방침
          </Text>
        </Button>
      </Flex>
    </Center>
  )
}
