export interface MemberReviewResponse {
  id: number
  content: string
  image_url: string
  rate: number
  like_count: number
  created_at: string
  updated_at: string
  beer: {
    id: number
    name: string
    image_url: string
  }
}
