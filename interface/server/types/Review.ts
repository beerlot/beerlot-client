export interface ReviewResponseType {
  id: number
  content: string
  image_url: string
  rate: number
  like_count: number
  created_at: string
  updated_at: string
  member: {
    id: number
    username: string
    image_url: string
  }
}
