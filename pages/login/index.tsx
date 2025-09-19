import { Box, Container } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { LoginTemplate } from '../../src/components/auth/login/LoginTemplate'
import { useEffect } from 'react'
import { Analytics } from '../../src/utils/analytics'
import CommonPageLayout from '../../src/components/shared/CommonPageLayout'

const Login = () => {
  useEffect(() => {
    Analytics.viewLogin()
  }, [])

  return (
    <CommonPageLayout>
      <LoginTemplate />
    </CommonPageLayout>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie

  if (cookies && cookies.includes('beerlot-oauth-auth-request')) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
