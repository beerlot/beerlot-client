import { POPULAR_BEER_TITLE, RECOMMENDED_BEER_TITLE } from "../../Static";
import Card from "./Card";
import SearchBar from "./SearchBar";
import WelcomeText from "./WelcomeText";

const HomeComponent = () => {
  <p>{POPULAR_BEER_TITLE}</p>;
  return (
    <>
      <WelcomeText />
      <SearchBar />
      <Card title={POPULAR_BEER_TITLE} />
      <Card title={RECOMMENDED_BEER_TITLE} />
    </>
  );
};

export default HomeComponent;
