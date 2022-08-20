import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <TitleContainer>
      <BackIcon></BackIcon>
      <TitleText>Title</TitleText>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  height: 40px;
`;
const BackIcon = styled.div`
  height: 40px;
`;
const TitleText = styled.div`
  height: 40px;
`;

export default Title;
