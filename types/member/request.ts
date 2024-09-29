import { LanguageType, ReviewSortType } from '../common'

export interface MemberReviewsRequest {
  page: number
  size: number
  sort: ReviewSortType
  language: LanguageType
}
