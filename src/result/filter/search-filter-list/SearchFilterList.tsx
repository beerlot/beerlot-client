import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import FilterTag from "../../../../common/Filters/FilterTag";
import { CategoryFilterListType } from "../../../../interface/types";
import {
  checkIsSelectedCategoryTag,
  checkIsSelectedCategoryTitle,
} from "../../../../utils/array";
import FilterTagTemp from "../search-filter-item/FilterTagTemp";

interface SearchFilterListProps {
  isFilterListOpen: boolean;
  filterList: CategoryFilterListType[];
  selectedFilters: CategoryFilterListType[];
  onClickToggle: () => void;
  onClickTag: (targetTitle: string, targetTag: string) => void;
}

const SearchFilterList: React.FC<SearchFilterListProps> = ({
  isFilterListOpen,
  filterList,
  selectedFilters,
  onClickToggle,
  onClickTag,
}) => {
  const getFilterTagStyles = (targetTitle: string) => {
    return {
      tagStyle: {
        h: "full",
        bg: checkIsSelectedCategoryTitle(selectedFilters, targetTitle)
          ? "yellow.300"
          : "yellow.200",
      },
      textStyle: {
        textColor: "black.100",
        textStyle: "h4",
      },
      // IconProp: {},
    };
  };

  const getFilterRowStyles = (targetTitle: string, targetTag: string) => {
    const isSelected = checkIsSelectedCategoryTag(
      selectedFilters,
      targetTitle,
      targetTag
    );
    return {
      textStyle: {
        textColor: isSelected ? "black.100" : "gray.200",
        textStyle: isSelected ? "h4_bold" : "h4",
      },
    };
  };

  return (
    <Box>
      {isFilterListOpen ? (
        <>
          {filterList.map((filter) => {
            const title = Object.keys(filter)[0];
            const tags = filter[title];
            return (
              <HStack w="full" key={title}>
                <FilterTag
                  tagText={title}
                  filterTagStyles={getFilterTagStyles(title)}
                />
                <HStack gap={"15px"} overflowX={"scroll"}>
                  {tags.map((tag: string) => {
                    return (
                      <Button key={tag} onClick={() => onClickTag(title, tag)}>
                        <Text {...getFilterRowStyles(title, tag)}>{tag}</Text>
                      </Button>
                    );
                  })}
                </HStack>
              </HStack>
            );
          })}
        </>
      ) : (
        // <Box px="0px">
        //   {filterList.map(({ title, tagList }) => {
        //     return (
        //       <SearchFilterItem
        //         key={`${title}-${tagList.length}`}
        //         title={title}
        //         tagList={tagList}
        //       />
        //     );
        //   })}
        // </Box>
        <Button px={0} onClick={onClickToggle} bg="white">
          <Flex
            gap="10px"
            p={0}
            flex="1"
            justifyContent="space-between"
            alignItems="center"
          >
            {filterList.map(({ title, tagList }) => {
              return (
                <FilterTagTemp
                  key={`${title}-${tagList.length}`}
                  title={title}
                  arrowDirection="down"
                />
              );
            })}
          </Flex>
        </Button>
      )}
    </Box>
  );
};

export default SearchFilterList;
