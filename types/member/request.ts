import { LanguageType, ReviewSortType } from '../common'

export interface Member {
  id?: number
  username?: string
  image_url?: string
  status_message?: string
  username_updated_at?: string
}

export interface MemberReviewsRequest {
  page: number
  size: number
  sort: ReviewSortType
  language: LanguageType
}
