import { configureStore } from '@reduxjs/toolkit'
import { ratingReducer } from './slice/ratings'

const rootReducer = { rating: ratingReducer }

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof store.getState>
