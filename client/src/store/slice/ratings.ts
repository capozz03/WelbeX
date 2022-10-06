import { createAsyncThunk, createSlice, miniSerializeError, PayloadAction } from '@reduxjs/toolkit'
import { RequestStatuses } from 'shared/helpers'
import { TRatingState, TRating, TFilter } from './entities'
import { ratingService } from './service'

export const getRatingAsync = createAsyncThunk(
  'ratings/getRatingAsync',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ratingService.getRating()
      return data
    } catch (error) {
      const serializedError = miniSerializeError(error)
      alert('Ошибка получения списка рейтингов')
      return rejectWithValue(serializedError)
    }
  }
)

export const getRatingFilterAsync = createAsyncThunk(
  'ratings/getRatingFilterAsync',
  async (params: TFilter, { rejectWithValue }) => {
    try {
      const { data } = await ratingService.getRatingFilter(params)
      return data
    } catch (error) {
      const serializedError = miniSerializeError(error)
      alert('Ошибка получения фильтрованного списка рейтингов')
      return rejectWithValue(serializedError)
    }
  }
)

const initialState = {
  data: [],
  status: RequestStatuses.IDLE,
  error: null,
} as TRatingState

const ratingSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение списка рейтингов
    [getRatingAsync.pending.type]: (state: TRatingState) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getRatingAsync.fulfilled.type]: (
      state: TRatingState,
      { payload }: PayloadAction<TRating[]>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      data: payload,
    }),
    [getRatingAsync.rejected.type]: (
      _,
      { payload: error }: PayloadAction<Error>
    ) => ({
      data: [],
      status: RequestStatuses.FAILURE,
      error,
    }),

    // Получение фильтрованного списка рейтингов
    [getRatingFilterAsync.pending.type]: (state: TRatingState) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getRatingFilterAsync.fulfilled.type]: (
      state: TRatingState,
      { payload }: PayloadAction<TRating[]>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      data: payload,
    }),
    [getRatingFilterAsync.rejected.type]: (
      _,
      { payload: error }: PayloadAction<Error>
    ) => ({
      data: [],
      status: RequestStatuses.FAILURE,
      error,
    }),
    
  },

  
})

export const ratingReducer = ratingSlice.reducer
