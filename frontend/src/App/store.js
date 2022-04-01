import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsDataApi } from '../services/coinsDataApi'
import watchlistReducer from '../Features/watchlistSlice'
import watchlistDataReducer from '../Features/watchlistDataSlice'
import userReducer from '../Features/UserSlice'

export const store =  configureStore({
    reducer: {
         [coinsDataApi.reducerPath]: coinsDataApi.reducer,
         watchlist: watchlistReducer,
         watchlistData: watchlistDataReducer,
         user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsDataApi.middleware),
})

setupListeners(store.dispatch)
