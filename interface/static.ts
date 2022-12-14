import { CategoryFilterListType } from "./types";

export const WELCOME_MESSAGE_FIRST = "๐ ์ด์์์ ";
export const WELCOME_MESSAGE_SECOND = "์ค๋์ ์ด๋ค ๋งฅ์ฃผ๋ฅผ ๋ง์๋ณผ๊น์?";
export const POPULAR_BEER_TITLE = "๐ฅ ์ธ๊ธฐ๋งฅ์ฃผ TOP10 ๐ฅ ";
export const RECOMMENDED_BEER_TITLE_1 = "๐ป ";
export const RECOMMENDED_BEER_TITLE_2 = " ๋๊ป ์ถ์ฒํด์ ๐ป";
export const BEERLOT_TITLE = "๐บBEER LOT๐บ";
export const orangeBright = "#FEA801";
export const SEARCH_BAR_PLACEHOLDER = "๋งฅ์ฃผ ์ด๋ฆ, ์ข๋ฅ, ํฅ ๋ฑ์ ๊ฒ์ํด๋ณด์ธ์!";

export const MOCK_CATEGORY_FILTER_LIST: CategoryFilterListType[] = [
  { title: "์ ๋ ฌ ๊ธฐ์ค", tags: ["์ข์์", "๋ณ์ ์", "๋ฆฌ๋ทฐ๋ง์ ์"] },
  { title: "๋งฅ์ฃผ ์ข๋ฅ", tags: ["IPA", "ํ์ค๋"] },
  { title: "์ ์กฐ๊ตญ", tags: ["๋์ผ", "๋ฏธ๊ตญ", "์ผ๋ณธ"] },
  { title: "๋์", tags: ["๋ผ์์ฝ", "3%๋ฏธ๋ง", "3%๋"] },
];

export const textMain = "#000000";

export const getVh = (px: number) => {
  return Math.floor(765 / px);
};

export const enum CardType {
  POPULAR = "popular",
  RECOMMEND = "recommend",
}

export const MOCK_CARD_LIST = [
  {
    id: 0,
    beerName: "์ธ๋ก์ค ๋๋",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "๐",
  },
  {
    id: 1,
    beerName: "์น ์ฑ์ฌ์ด๋ค ์ ๋ก",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "๐",
  },
  {
    id: 2,
    beerName: "ํฉ์ ์ ๋ก",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "๐",
  },
  {
    id: 3,
    beerName: "๋ง์๊ธ",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "๐",
  },
  {
    id: 4,
    beerName: "์ค์์ค ๋ฏธ๋",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "๐",
  },
];

export interface beerItemType {
  id: number;
  beerName: string;
  img_src: string;
  sort: string;
  country: string;
}

export enum ReviewStatic {
  numberOfMaxAttachedFile = 5,
  ReviewInputMaxLength = 2000,
}

export const MOCK_BEERS_SUGGESTION = {
  id: 0,
  name_ko: "์ค๋น๋ผ๊ฑฐ",
  name_en: "OB LAGAR",
  description: "์ค๋น๋ผ๊ฑฐ ์๋๋ค.",
  country: "KO",
  volume: 4.4,
  image_url: "https://picsum.photos/id/237/200/300",
  category: {
    id: 1,
    name_ko: "๋ผ๊ฑฐ",
    name_en: "lagar",
    description: "this is lagar",
    parent: {
      id: 2,
      name_ko: "๋ฐ๋งฅ์ฃผ",
      name_en: "wheat beer",
    },
  },
  tags: [
    {
      id: 2,
      name_ko: "๋ฐ๋งฅ์ฃผ",
      name_en: "wheat beer",
    },
  ],
  like_count: 24,
  review_count: 3,
  rate: 4.1,
};
