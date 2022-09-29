import { useState } from "react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import TempLogin from "../Auth/TempLogin";
import CarouselCardList from "../Card/CardList/CarouselCardList";
import TwoByTwoCardList from "../Card/CardList/TwoByTwoCardList";
import SearchInputHome from "./SearchInputHome";
import WelcomeText from "./WelcomeText";
import { axiosTest } from "../../server/api";

const HomeComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleUserName = (newUserName: string) => {
    setUserNickname(newUserName);
  };

  return (
    <Container>
      <TempLogin
        handleLogin={handleLogin}
        handleUserName={handleUserName}
        isLoggedIn={isLoggedIn}
        userNickname={userNickname}
      />
      <Button onClick={axiosTest}>버튼</Button>
      <WelcomeText nickname={userNickname} isLoggedIn={isLoggedIn} />
      <SearchInputHome />
      {isLoggedIn ? (
        <>
          <CarouselCardList title={POPULAR_BEER_TITLE} />
          <CarouselCardList title={userNickname} />
        </>
      ) : (
        <TwoByTwoCardList
          title={POPULAR_BEER_TITLE}
          itemList={MOCK_CARD_LIST}
        />
      )}
    </Container>
  );
};

export default HomeComponent;

export const Container = styled.div`
  padding: 24px;
  background: white;
  max-width: 450px;
`;
