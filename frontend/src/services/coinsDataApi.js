import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://api.coingecko.com/api/v3/coins"

export const coinsDataApi = createApi({
    reducerPath: "coinsData",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCoinsData: builder.query({
            query: (currency) => `/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
        }),
        getCoinData: builder.query({
            query:(id) => `/${id}`
        }),
        getHistoricalData: builder.query({
            query:(options) => `/${options.id}/ohlc?vs_currency=usd&days=${options.chartDays}`,
        })
    })
})

export const {useGetCoinsDataQuery,useGetCoinDataQuery,useGetHistoricalDataQuery} = coinsDataApi