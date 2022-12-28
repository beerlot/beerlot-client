import { CategoryFilterListType } from "../interface/types";

export const isSelected = (id: number, ids: number[]) => {
  return ids.includes(id);
};

export const isSelectedString = (string: string, stringList: string[]) => {
  return string in stringList;
};

export const checkIsSelectedCategoryTitle = (
  selectedFilters: CategoryFilterListType[],
  targetTitle: string
) => {
  const titleList = selectedFilters.map((item) => item.title);
  return isSelectedString(targetTitle, titleList);
};

export const checkIsSelectedCategoryTag = (
  selectedFilters: CategoryFilterListType[],
  targetTitle: string,
  targetTag: string
) => {
  let isSelectedCategoryTag = false;
  selectedFilters.forEach((itemObj) => {
    if (itemObj.title === targetTitle) {
      const selectedTagObj = itemObj;
      selectedTagObj.tagList.forEach((tag) => {
        if (tag === targetTag) {
          isSelectedCategoryTag = true;
        }
      });
    }
  });
  return isSelectedCategoryTag;
};
