import { EditTemplate } from '@/components/account/user-info/edit/EditTemplate'
import { GetServerSideProps } from 'next'
import CommonPageLayout from '../../../src/components/shared/CommonPageLayout'

const EditPage = () => {
  return (
    <CommonPageLayout >
      <EditTemplate />
    </CommonPageLayout>
  )
}

export default EditPage

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
