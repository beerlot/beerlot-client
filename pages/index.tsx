import Cookies from 'js-cookie'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUserInfoQuery } from '../hooks/query/useUserQuery'
import { filterAccessToken } from '../service/auth'
import HomeTemplate from '../src/components/home/HomeTemplate'

const Home: NextPage = () => {
  const router = useRouter()
  const isSignedUp = router.query.is_signed_up
  const queryAccessToken = router.query.access_token
  const cookieAccessToken = Cookies.get('beerlot-oauth-auth-request')
  const accessToken = filterAccessToken(cookieAccessToken, queryAccessToken)
  const userQuery = useUserInfoQuery(accessToken)

  useEffect(() => {
    if (isSignedUp === 'false' && typeof queryAccessToken === 'string') {
      Cookies.set('beerlot-oauth-auth-guest', queryAccessToken)
      router.push('/signup')
      return
    }

    if (isSignedUp === 'true' && typeof queryAccessToken === 'string') {
      Cookies.set('beerlot-oauth-auth-request', queryAccessToken)
      return
    }
  }, [queryAccessToken, isSignedUp, router])

  useEffect(() => {
    if (!!queryAccessToken) {
      userQuery.refetch()
      return
    }
  }, [queryAccessToken])

  useEffect(() => {
    if (cookieAccessToken) {
      userQuery.refetch()
      return
    }
  }, [cookieAccessToken])

  return <HomeTemplate username={userQuery?.data?.username} />
}

export default Home
