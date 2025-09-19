import {
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { AllTabPanelList } from './AllTabPanelList'
import { UpcomingFeed } from './UpcomingFeed'

export const FeedTabList = () => (
  <Tabs
    colorScheme='orange'
    w='full'
    defaultIndex={1}
    h='full'
    overflowY={'scroll'}
    isFitted
    bg='yellow.100'
  >
    <TabList px={0} bg={'white'}>
      <Tab>팔로잉</Tab>
      <Tab>전체보기</Tab>
    </TabList>
    <Divider />

    <TabPanels bg='yellow.100' h={'full'} p={0}>
      <TabPanel p={0}>
        <UpcomingFeed />
      </TabPanel>
      <TabPanel p={0}>
        <AllTabPanelList />
      </TabPanel>
    </TabPanels>
  </Tabs>
)
