import { POPULAR_BEER_TITLE, RECOMMENDED_BEER_TITLE } from "../../Static";
import Card from "./Card";
import SearchBar from "./SearchBar";
import WelcomeText from "./WelcomeText";
import styled from "styled-components";

const HomeComponent = () => {
  <p>{POPULAR_BEER_TITLE}</p>;
  return (
    <Container>
      <WelcomeText />
      <SearchBar />
      <Card title={POPULAR_BEER_TITLE} />
      <Card title={RECOMMENDED_BEER_TITLE} />
    </Container>
  );
};

export default HomeComponent;

export const Container = styled.div`
  padding: 24px;
`;
