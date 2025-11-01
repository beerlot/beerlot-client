import { useUserInfoQuery } from '@/../hooks/query/useUserQuery'
import { BeerlotLoading } from '@/components/shared/Loading'
import Cookies from 'js-cookie'
import { ProfileEditContent } from './ProfileEditContent'
import React from 'react'

export const EditTemplate = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Avoid reading cookies during SSR to prevent hydration mismatch
  const accessToken = isMounted ? Cookies.get('beerlot-oauth-auth-request') ?? '' : ''
  const userQuery = useUserInfoQuery(accessToken ?? '', {
    enabled: isMounted && !!accessToken,
  })

  const loading = userQuery.isLoading

  const {
    image_url,
    username,
    status_message: statusMessage,
    username_updated_at,
  } = userQuery?.data ?? {}

  if (!isMounted || loading) return <BeerlotLoading />

  return (
    <>
      {username && (
        <ProfileEditContent
          existingImageURl={image_url || '/images/default-profile.png'}
          statusMessage={statusMessage}
          username={username}
          usernameUpdatedAt={username_updated_at}
        />
      )}
    </>
  )
}
