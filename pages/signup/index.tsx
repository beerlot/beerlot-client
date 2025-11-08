'use client'
import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import SignUpTemplate from '../../src/components/auth/sign-up/SignUpTemplate'
import { Analytics } from '../../src/utils/analytics'
import CommonPageLayout from '../../src/components/shared/CommonPageLayout'

const SignUpPage = () => {
  useEffect(() => {
    Analytics.viewSignUp()
  }, [])

  return (
    <CommonPageLayout showHeader={false}>
      <SignUpTemplate />
    </CommonPageLayout>
  )
}

export default SignUpPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (process.env.NODE_ENV === 'development') {
    return {
      props: {},
    }
  }
  const cookies = context.req.headers.cookie
  if (cookies && cookies.includes('beerlot-oauth-auth-request')) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }
  }

  if (!cookies || !cookies.includes('beerlot-oauth-auth-guest')) {
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
