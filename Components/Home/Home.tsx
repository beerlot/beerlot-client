import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getAllBeers } from "../../server/api";
import { popularBeerStateReadOnly } from "../../src/store/beers/popular-beers/atom";
import { POPULAR_BEER_TITLE } from "../../Static";
import { BeerResultType } from "../../types";
import TempLogin from "../Auth/Login/TempLogin";
import CarouselCardList from "../Card/CardList/CarouselCardList";
import TwoByTwoCardList from "../Card/CardList/TwoByTwoCardList";
import SearchInputHome from "./SearchInputHome";
import WelcomeText from "./WelcomeText";

const HomeComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState("");
  const allBeers = useRecoilValue<BeerResultType[]>(popularBeerStateReadOnly);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleUserName = (newUserName: string) => {
    setUserNickname(newUserName);
  };

  useEffect(() => {
    console.log(allBeers, "allBeers");
  });

  return (
    <React.Suspense>
      <Container>
        <TempLogin
          handleLogin={handleLogin}
          handleUserName={handleUserName}
          isLoggedIn={isLoggedIn}
          userNickname={userNickname}
        />
        <WelcomeText nickname={userNickname} isLoggedIn={isLoggedIn} />
        <SearchInputHome />
        {isLoggedIn ? (
          <>
            <CarouselCardList title={POPULAR_BEER_TITLE} />
            <CarouselCardList title={userNickname} />
          </>
        ) : (
          allBeers.length > 0 && (
            <TwoByTwoCardList
              title={POPULAR_BEER_TITLE}
              itemList={allBeers} // list단에 전부 내리는 게 맞다고 생각하지 않음.
            />
          )
        )}
      </Container>
    </React.Suspense>
  );
};

export default HomeComponent;

export const Container = styled.div`
  padding: 24px;
  background: white;
  max-width: 450px;
`;
