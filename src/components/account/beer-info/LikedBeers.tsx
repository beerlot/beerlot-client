import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {CardType} from "../../../../interface/static";
import {BeerResultType} from "../../../../interface/types";
import {getAllBeersApi} from "../../../api/beers/api";
import {likedBeerState} from "../../../store/atom";

import CardItem from "../../card/CardItem";

const LikedBeers = () => {
  const [allBeers, setAllBeers] = useState<BeerResultType[]>([]);
  const [likedBeers, setLikedBeers] = useRecoilState(likedBeerState);
  const handleInfo = async (index: number) => {
    const beers = await getAllBeersApi(index);
    return beers;
  };

  const handleSetAllBeers = async () => {
    const allBeers = await Promise.all(
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((index) => {
        return handleInfo(index + 1);
      })
    );
    // if (allBeers) {
    //   setAllBeers(allBeers);
    // }
  };

  useEffect(() => {
    handleSetAllBeers();
  }, []);

  const cardType = CardType.RECOMMEND;

  return (
    <>
      {allBeers.map((item, idx) => {
        return (
          <CardItem
            isTwoByTwo
            cardType={cardType}
            key={idx} // 수정해야함.
            beerName={item.name_ko}
            img_src={item.image_url}
            sort={item.category.name_ko}
            country={item.country.code}
          />
        );
      })}
    </>
  );
};

export default LikedBeers;