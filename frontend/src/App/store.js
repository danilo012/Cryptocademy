import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsDataApi } from '../services/coinsDataApi'

export const store =  configureStore({
    reducer: {
         [coinsDataApi.reducerPath]: coinsDataApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsDataApi.middleware),
})

setupListeners(store.dispatch)
