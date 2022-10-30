import { selector } from "recoil";
import { BeerResultType } from "../../../../types";

export const popularBeerState = selector<BeerResultType[]>({
  key: "popularBeerStateReadOnly",
  get: async () => {
    const res = await fetch(`/api/v1/beers/1/`).then((res) => res.json());
    if (res.error) {
      throw res.error;
    }
    return res;
  },
});
