import { FeedTemplate } from '../../src/components/feed/FeedTemplate'
import CommonPageLayout from '../../src/components/shared/CommonPageLayout'

const Feed = () => {
  return (
    <CommonPageLayout withContentPadding={false}>
      <FeedTemplate />
    </CommonPageLayout>
  )
}

export default Feed
