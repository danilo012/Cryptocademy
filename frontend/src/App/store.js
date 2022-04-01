import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsDataApi } from '../services/coinsDataApi'
import watchlistDataReducer from '../Features/watchlistDataSlice'
import portfolioDataReducer from '../Features/portfolioDataSlice'
import availableCoinsReducer from '../Features/availableCoins'
import userReducer from '../Features/UserSlice'
import { supabaseApi } from '../services/supabaseApi'

export const store =  configureStore({
    reducer: {
         [coinsDataApi.reducerPath]: coinsDataApi.reducer,
         [supabaseApi.reducerPath]: supabaseApi.reducer,
         watchlistData: watchlistDataReducer,
         portfolioData: portfolioDataReducer,
         availableCoins: availableCoinsReducer,
         user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsDataApi.middleware),
})

setupListeners(store.dispatch)
