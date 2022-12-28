import React, { useState } from "react";
import styled from "styled-components";
import FilterTag from "../../../../common/Filters/FilterTag";

interface SearchFilterItemProps {
  title: string;
  tagList: string[];
}

const SearchFilterItem: React.FCItemProps> = ({
  title,
  tagList,
}) => {
  const styleProps = {
    tagStyle: {},
    textStyle: {},
  };

  const [selectedOrder, setSelectedOrder] = useState("좋아요순");
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  //TODO: any 타입 삭제
  const handleSelectOrder = (e: any) => {
    setSelectedOrder(e.target.innerText);
  };

  return (
    <Container>
      {/* color값을 넘겨야 함 */}
      <TagContainer>
        {tagList.map((tag) => {
          return (
            <FilterTag
              key={tag}
              filterTagStyles={styleProps}
              tagText={tag}
              IconProp={}
            />
          );
        })}
      </TagContainer>
    </Container>
  );
};

export default SearchFilterItem;

export const Container = styled.div`
  padding: 5px;
  display: flex;
  border-bottom: 0.3px solid rgba(97, 100, 107, 0.5);

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #000000;
`;
