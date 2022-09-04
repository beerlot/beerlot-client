import React, { useState } from "react";
import styled from "styled-components";

interface SearchFilterTagProps {
  tag: string;
}

const SearchFilterTag: React.FC<SearchFilterTagProps> = ({ tag }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <>
      <Container isSelected={isSelected} onClick={handleSelect}>
        {tag}
      </Container>
    </>
  );
};

export default SearchFilterTag;

export const Container = styled.p<{ isSelected: boolean }>`
  font-family: "Roboto";
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  font-size: 12px;

  color: ${({ isSelected }) =>
    isSelected ? "black" : "rgba(97, 100, 107, 0.5)"};
`;
