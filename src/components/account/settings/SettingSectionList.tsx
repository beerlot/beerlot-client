import React from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
import { SectionButton } from '@components/account/settings/SectionButton'

interface SettingSectionListProps {
  usersSetting: { title: string; onClick: () => void }[]
}
export const SettingSectionList: React.FC<SettingSectionListProps> = ({
  usersSetting,
}) => {
  return (
    <VStack
      bg='gray.100'
      pt='70px'
      w='full'
      h='full'
      gap='10px'
      borderRight={'1px solid'}
      borderRightColor={'gray.200'}
      borderLeft={'1px solid'}
      borderLeftColor={'gray.200'}
    >
      <Flex w='full' flexDir={'column'}>
        {BeerSettingSection.map(({ title }) => (
          <SectionButton key={title} title={title} />
        ))}
      </Flex>
      <Flex w='full' flexDir={'column'}>
        {NoticeSettingSection.map(({ title, href }) => (
          <SectionButton key={title} title={title} href={href} />
        ))}
      </Flex>
      <Flex w='full' h='full' flexDir={'column'}>
        {usersSetting.map((item) => (
          <SectionButton
            title={item.title}
            key={item.title}
            onClick={item.onClick}
            _hover={{}}
          />
        ))}
        <Box
          h='full'
          bg={'white'}
          w='full'
          style={{
            marginTop: 0,
          }}
        />
      </Flex>
    </VStack>
  )
}

export const BeerSettingSection = [
  { title: '가입한 계정' },
  // { title: '최애맥주 변경', href: '/account/settings/favoritebeer' },
]

export const NoticeSettingSection = [
  {
    title: '공지사항',
    href: '/account/settings/notice',
  },
  {
    title: '문의하기',
    href: '/account/settings/inquiry',
  },
  { title: '비어랏 정보', href: '/account/settings/info' },
]
