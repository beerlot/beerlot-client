import { Box } from '@chakra-ui/react'
import { InquiryTemplate } from '../../../src/components/account/settings/InquiryTemplate'
import CommonPageLayout from '../../../src/components/shared/CommonPageLayout'

const Inquiry = () => {
  return (
    <CommonPageLayout withContentPadding={false}>
      <InquiryTemplate />
    </CommonPageLayout>
  )
}

export default Inquiry
