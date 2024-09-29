import { MemberType } from '../member/response'

interface BeerShortenType {
  id?: number
  name?: string
}

interface BeerContentType {
  id?: number
  content?: string
  image_url?: string
  rate?: number
  like_count?: number
  updated_at?: string
  buy_from?: string
  member?: MemberType
  beer?: BeerShortenType
}

/* recommend beers */
export type RecommendedBeersResponse = {
  id: number[]
}