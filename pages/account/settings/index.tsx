import { Box, Container } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { SettingsTemplate } from '@components/account/settings/SettingTemplate'
import CommonPageLayout from '../../../src/components/shared/CommonPageLayout'
const SettingsPage = () => {
  return (
    <CommonPageLayout>
      <Box w='full' h='full' bg='gray.100'>
        <Container
          p={'0px'}
          h='full'
          w='full'
          bg='white'
          position='relative'
          maxW='450px'
        >
          <SettingsTemplate />
        </Container>
      </Box>
    </CommonPageLayout>
  )
}

export default SettingsPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie

  if (!cookies || !cookies.includes('beerlot-oauth-auth-request')) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
