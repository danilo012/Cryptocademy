import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
      // updateWatchlist:(state,action) => {
      //   return action.payload
      // },
      updateWatchlist:(state,action) => {
        state.unshift(action.payload)
      }
  }
});

export const {updateWatchlist} = watchlistSlice.actions

export default watchlistSlice.reducer