import { useState } from "react";
import styled from "styled-components";
import { MOCK_CARD_LIST, POPULAR_BEER_TITLE } from "../../Static";
import TempLogin from "../Auth/TempLogin";
import CardList from "./CardList";
import SearchBarHome from "./SearchBarHome";
import TwoByTwoCard from "./TwoByTwoCard";
import WelcomeText from "./WelcomeText";

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
      <WelcomeText nickname={userNickname} isLoggedIn={isLoggedIn} />
      <SearchBarHome />
      {isLoggedIn ? (
        <>
          <CardList title={POPULAR_BEER_TITLE} />
          <CardList title={userNickname} />
        </>
      ) : (
        <TwoByTwoCard title={POPULAR_BEER_TITLE} itemList={MOCK_CARD_LIST} />
      )}
    </Container>
  );
};

export default HomeComponent;

export const Container = styled.div`
  padding: 24px;
`;
