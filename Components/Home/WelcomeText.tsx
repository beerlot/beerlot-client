import React from "react";
import { WELCOME_MESSAGE_FIRST } from "../../Static";
import { WELCOME_MESSAGE_SECOND } from "../../Static";
import styled from "styled-components";

const WelcomeText = () => {
  return (
    <WelcomeTextContainer>
      <TextContainer>
        <p>{WELCOME_MESSAGE_FIRST}</p>
        <Nickname>닉네임</Nickname>
        <p>님!</p>
      </TextContainer>
      <TextContainer>
        <p>{WELCOME_MESSAGE_SECOND}</p>
      </TextContainer>
    </WelcomeTextContainer>
  );
};

export default WelcomeText;

const TextContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  opacity: 0.8;
  display: flex;
`;

const Nickname = styled.p`
  text-color: #fea801;
`;

const WelcomeTextContainer = styled.div`
  margin: 12vh 21px;
`;
