import {Box, HStack, Icon, Text} from "@chakra-ui/react";
import React from "react";
import {RightChevron} from "../../../../common/custom-icons/customIcons";
import FilterTag from "../../../../common/Filters/FilterTag";
import {CategoryFilterListType} from "../../../../interface/types";
import {checkIsSelectedCategoryTitle} from "../../../../utils/array";

interface SearchFilterListProps {
  isFilterListOpen: boolean;
  filterList: CategoryFilterListType[];
  selectedFilters: CategoryFilterListType[];
  onClickToggle: () => void;
  onClickTag: (targetTitle: string, targetTag: string) => void;
}

export const SearchFilterList: React.FC<SearchFilterListProps> = ({
  isFilterListOpen,
  filterList,
  selectedFilters,
  onClickToggle,
  onClickTag,
}) => {
  const checkSelectedFilter = (targetTitle: string, targetTag: string) => {
    let isSelected = false;
    const selectedObjList = selectedFilters.filter(
      (item) => item.title === targetTitle
    );
    if (
      selectedObjList.length > 0 &&
      selectedObjList[0].tags.includes(targetTag)
    ) {
      isSelected = true;
    }
    return isSelected;
  };

  return (
    <Box>
      {isFilterListOpen ? (
        <Box>
          {filterList.map((filterObj) => {
            const {title, tags} = filterObj;
            return (
              <HStack w="full" key={title} border="1px solid green">
                <SearchFilterTag
                  title={title}
                  selectedFilters={selectedFilters}
                  isFilterListOpen={isFilterListOpen}
                />
                <HStack gap={"15px"} overflowX={"scroll"} bg="yellow">
                  {tags.map((tag: string) => {
                    return (
                      <Text
                        key={tag}
                        bg="none"
                        textColor={
                          checkSelectedFilter(title, tag)
                            ? "black.100"
                            : "gray.200"
                        }
                        textStyle={
                          checkSelectedFilter(title, tag) ? "h4_bold" : "h4"
                        }
                        onClick={() => onClickTag(title, tag)}
                      >
                        {tag}
                      </Text>
                    );
                  })}
                </HStack>
              </HStack>
            );
          })}
        </Box>
      ) : (
        <HStack>
          {filterList.map((filterObj) => {
            const {title} = filterObj;
            return (
              <SearchFilterTag
                key={title}
                title={title}
                selectedFilters={selectedFilters}
                onClick={onClickToggle}
                isFilterListOpen={isFilterListOpen}
              />
            );
          })}
        </HStack>
      )}
    </Box>
  );
};

interface SearchFilterTagProps {
  title: string;
  selectedFilters: CategoryFilterListType[];
  isFilterListOpen: boolean;
  onClick?: () => void;
}

const SearchFilterTag: React.FC<SearchFilterTagProps> = ({
  title,
  selectedFilters,
  isFilterListOpen,
  onClick,
}) => {
  return (
    <FilterTag
      tagText={title}
      borderRadius="15px"
      pl="5px"
      h="full"
      bg={
        checkIsSelectedCategoryTitle(selectedFilters, title)
          ? "yellow.300"
          : "yellow.200"
      }
      onClick={onClick}
    >
      <Icon
        as={isFilterListOpen ? RightChevron : RightChevron}
        w="19px"
        h="19px"
        color="black.100"
      />
    </FilterTag>
  );
};
