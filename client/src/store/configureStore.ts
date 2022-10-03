import { configureStore } from '@reduxjs/toolkit'

const rootReducer = { }

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof store.getState>