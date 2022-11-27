import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react";
import { BasicPanelList } from "./tab-panel/BasicPanelList";
import { ReviewPanelList } from "./tab-panel/ReviewPanelList";

export const DetailTabList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <Button
        onClick={() => {
          setTabIndex(0);
        }}
      >
        0
      </Button>
      <Button
        onClick={() => {
          setTabIndex(1);
        }}
      >
        1
      </Button>

      <Tabs
        colorScheme="orange"
        w="full"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList px={"18px"}>
          <Tab flexGrow="1" color="orange.100">
            <Text>기본 정보</Text>
          </Tab>
          <Tab flexGrow="1" color="orange.100">
            <Text>리뷰</Text>
          </Tab>
        </TabList>
        <Divider />

        <TabPanels>
          <TabPanel>
            <BasicPanelList />
          </TabPanel>
          <TabPanel>
            <ReviewPanelList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
