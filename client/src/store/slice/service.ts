import { $api } from 'shared/api/api'
import { TFilter, TRating } from './entities'

export const ratingService = {
  getRating: async () => $api.get<TRating[]>(`/rating`),
  getRatingFilter: async ({ field, condition, value }: TFilter) => {
    return $api.get<TRating[]>(`/rating/${field}/${condition}/${value}`)
  },
}
