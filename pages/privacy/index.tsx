import { Box, Container } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { SettingsTemplate } from '@components/account/settings/SettingTemplate'
const PrivacyPage = () => {
  return (
    <Box w='full' h='full' bg='gray.100'>
      <Container
        p={'0px'}
        h='full'
        w='full'
        bg='white'
        position='relative'
        maxW='450px'
      ></Container>
    </Box>
  )
}

export default PrivacyPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination:
        'https://beerlot.notion.site/f4dfd6c17dca44d8b6e53e2443eaa0b3',
      permanent: true,
    },
  }
}
