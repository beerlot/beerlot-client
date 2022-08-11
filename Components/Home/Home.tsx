import Card from "./Card";
import CardCarousel from "./Card";
import SearchBar from "./SearchBar";
import WelcomeText from "./WelcomeText";

const HomeComponent = () => {
  return (
    <>
      <WelcomeText />
      <SearchBar />
      <Card />
    </>
  );
};

export default HomeComponent;
