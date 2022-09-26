import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import SearchFilterItem from "../SearchFilterItem/SearchFilterItem";

interface SearchFilterListProps {
  handeIsFilterListOpen: (isExpanded: boolean) => void;
  isFilterListOpen: boolean;
}

const SearchFilterList: React.FC<SearchFilterListProps> = ({
  handeIsFilterListOpen,
  isFilterListOpen,
}) => {
  const categoryList = [
    { title: "좋아요순", tagList: ["좋아요", "별점순", "리뷰많은 순"] },
    { title: "맥주 종류", tagList: ["IPA", "필스너"] },
    { title: "제조국", tagList: ["독일", "미국", "일본"] },
    { title: "도수", tagList: ["논알콜", "3%미만", "3%대"] },
  ];

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? <Text>minus</Text> : <Text>Add</Text>}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>

      {categoryList.map((category) => {
        return <SearchFilterItem key={category.title} category={category} />;
      })}
    </>
  );
};

export default SearchFilterList;
