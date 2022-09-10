import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
} from "@chakra-ui/react";
import FollowingTabPanel from "./FollowingTabPanel";
import AllTabPanel from "./AllTabPanel";

const FeedTabList = () => {
  return (
    <Tabs h={"30px"} align="center">
      <TabList>
        <Tab>팔로잉</Tab>
        <Tab>전체보기</Tab>
      </TabList>
      <Divider />

      <TabPanels bg={"#FFE580"}>
        <TabPanel>
          <FollowingTabPanel />
        </TabPanel>
        <TabPanel>
          <AllTabPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FeedTabList;
