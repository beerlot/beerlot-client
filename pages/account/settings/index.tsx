import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { SettingsTemplate } from '@components/account/settings/SettingTemplate'
import CommonPageLayout from '../../../src/components/shared/CommonPageLayout'
const SettingsPage = () => {
  return (
    <CommonPageLayout withContentPadding={false}>
      <SettingsTemplate />
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
