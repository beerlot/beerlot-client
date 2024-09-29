export interface PaginatedResponseType<T> {
  contents?: T[]
  page?: number
  nextPage?: number
  totalPages?: number
  pageRequest?: {
    page?: number
    size?: number
    sort?: {
      property?: string
      direction?: SortDirectionEnum
    }
    offset?: number
  }
  totalElements?: number
}

enum SortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
