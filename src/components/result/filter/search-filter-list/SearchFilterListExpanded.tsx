import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MIN_MAX_BEER_VOLUME_SLIDER,
  MOCK_CATEGORY_FILTER_LIST,
} from "../../../../../interface/static";
import {
  CategoryFilterListType,
  CategoryTitle,
} from "../../../../../interface/types";
import { checkSelectedFilter } from "../../../../../service/filter";
import { SearchFilterTag } from "../SearchFilterTag/SearchFilterTag";
import {
  SearchFilterRangeRow,
  SearchFilterRowOption,
  SearchFilterRowOptionsWrapper,
  SearchFilterRowWrapper,
} from "./SearchFilterListCell";

interface SearchFilterListExpandedProps {
  isFilterListOpen: boolean;
  selectedFilters: CategoryFilterListType[];
  onClickToggle: () => void;
  onClickTag: (targetTitle: CategoryTitle, targetTag: string) => void;
}

export const SearchFilterListExpanded: React.FC<
  SearchFilterListExpandedProps
> = ({ isFilterListOpen, selectedFilters, onClickToggle, onClickTag }) => {
  const [beerVolume, setBeerVolume] = useState<number[]>([
    MIN_MAX_BEER_VOLUME_SLIDER[0],
    MIN_MAX_BEER_VOLUME_SLIDER[1],
  ]);
  return (
    <Box>
      {MOCK_CATEGORY_FILTER_LIST.map((filterObj) => {
        const { title, tags, isRange } = filterObj;
        return (
          <SearchFilterRowWrapper key={title}>
            <SearchFilterTag
              title={title}
              selectedFilters={selectedFilters}
              isFilterListOpen={isFilterListOpen}
              flexShrink={0}
            />
            <SearchFilterRowOptionsWrapper>
              {isRange ? (
                <SearchFilterRangeRow
                  beerVolume={beerVolume}
                  onChange={setBeerVolume}
                />
              ) : (
                <>
                  {tags.map((tag: string) => {
                    const isSelected = checkSelectedFilter(
                      selectedFilters,
                      title,
                      tag
                    );
                    return (
                      <SearchFilterRowOption
                        key={tag}
                        textColor={isSelected ? "black.100" : "gray.200"}
                        textStyle={isSelected ? "h4_bold" : "h4"}
                        onClick={() => {
                          onClickTag(title, tag);
                        }}
                      >
                        {tag}
                      </SearchFilterRowOption>
                    );
                  })}
                </>
              )}
            </SearchFilterRowOptionsWrapper>
          </SearchFilterRowWrapper>
        );
      })}
    </Box>
  );
};
