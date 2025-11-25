import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import AccountsTemplate from '../../src/components/account/AccountsTemplate'
import { useEffect } from 'react'
import { Analytics } from '../../src/utils/analytics'
import CommonPageLayout from '../../src/components/shared/CommonPageLayout'
import { SettingsIconButton } from '../../src/components/account/SettingsIconButton'

const AccountPage = () => {
  useEffect(() => {
    Analytics.viewMypage()
  }, [])

  return (
    <CommonPageLayout withContentPadding={false} headerRight={<SettingsIconButton />}>
      <AccountsTemplate />
    </CommonPageLayout>
  )
}

export default AccountPage

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
