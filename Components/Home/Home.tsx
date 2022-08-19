import { POPULAR_BEER_TITLE, RECOMMENDED_BEER_TITLE } from "../../Static";
import Card from "./Card";
import SearchBar from "./SearchBar";
import WelcomeText from "./WelcomeText";
import styled from "styled-components";
import TwoByTwoCard from "./TwoByTwoCard";
import { useState } from "react";

const HomeComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그인 됨" : "로그아웃 됨"}
      </button>
      <WelcomeText />
      <SearchBar />
      {isLoggedIn ? (
        <>
          <Card title={POPULAR_BEER_TITLE} />
          <Card title={RECOMMENDED_BEER_TITLE} />
        </>
      ) : (
        <TwoByTwoCard />
      )}
    </Container>
  );
};

export default HomeComponent;

export const Container = styled.div`
  padding: 24px;
`;
