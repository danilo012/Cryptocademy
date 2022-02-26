import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const coinsDataApi = createApi({
    reducerPath: "coinsData",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false",
    }),
    endpoints:(builder) => ({
        getCoinsData: builder.query({
            query: () => `/coinsData`
        })
    })
})

export const {useGetCoinsDataQuery} = coinsDataApi