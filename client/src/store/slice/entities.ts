import { RequestStatuses } from 'shared/helpers'

export interface IState<T> {
  data: T
  status: RequestStatuses
  error: Error | null
}

export type TRating = {
  id: number
  date: Date
  name: string
  count: number
  distance: number
}

export type TFilter = {
  field: string
  condition: string
  value: string
}

export type TFilterParams = {
  filter: TFilter,
  limit: number
  offset: number
}

export type TParams = {
  limit: number
  offset: number
}

export type TRatingState = IState<TRating[]>
