import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FilterTag from "../SearchFilterItem/filterTag";
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
          {({ isExpanded }) => {
            return (
              <>
                <AccordionButton>
                  {isExpanded ? (
                    <Text></Text>
                  ) : (
                    <Flex
                      flex="1"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {categoryList.map(({ title, tagList }) => {
                        return (
                          <FilterTag
                            key={`${title}-${tagList.length}`}
                            title={title}
                            arrowDirection="down"
                          />
                        );
                      })}
                    </Flex>
                  )}
                </AccordionButton>
                <AccordionPanel p={0}>
                  {categoryList.map(({ title, tagList }) => {
                    return (
                      <SearchFilterItem
                        key={`${title}-${tagList.length}`}
                        title={title}
                        tagList={tagList}
                      />
                    );
                  })}
                </AccordionPanel>
              </>
            );
          }}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SearchFilterList;
