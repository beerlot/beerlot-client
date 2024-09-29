import { dislikeBeerApi, likeBeerApi } from '@/api/beers/api'
import { FailureResponseV2 } from '@/types/api'
import { useMutation, UseMutationOptions } from 'react-query'
import { BeerLikeRequestType } from '../../types/server/beer/request'

export const useBeerLikeMutation = (
  beerId: number,
  accessToken: string,
  options?: UseMutationOptions<void, FailureResponseV2, BeerLikeRequestType>
) => {
  return useMutation({
    mutationFn: () => likeBeerApi(beerId, accessToken),
    ...options,
  })
}

export const useBeerDislikeMutation = (
  beerId: number,
  accessToken: string,
  options?: UseMutationOptions<void, FailureResponseV2, BeerLikeRequestType>
) => {
  return useMutation({
    mutationFn: () => dislikeBeerApi(beerId, accessToken),
    ...options,
  })
}
