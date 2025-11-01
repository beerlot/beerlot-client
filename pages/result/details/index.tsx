import React from 'react'
import { DetailTemplate } from '@components/details/DetailTemplate'
import CommonPageLayout from '../../../src/components/shared/CommonPageLayout'

const index = () => {
  return (
    <CommonPageLayout withContentPadding={false}>
      <DetailTemplate />
    </CommonPageLayout>
  )
}

export default index
