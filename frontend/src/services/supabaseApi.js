import {createApi,fakeBaseQuery,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { supabase } from '../Utils/init-supabase'

export const supabaseApi = createApi({
    reducerPath: "supabaseApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getPortfolioData: builder.query({
            async queryFn(id)  {  
                try {
                    let { data: portfolio, error } = await supabase
                    .from('portfolio')
                    .select(`
                        coinId,
                        coinSymbol,
                        coinName,
                        image,
                        amount,
                        coinAmount
                    `)
                    .eq('userId',`${id}`)
                    .not('coinId', 'eq', 'USD')
                    
                    if(error) {
                        throw new Error(error)
                    }
                    return {data: portfolio}
                } catch (error) {
                    return {error: error}
                }                 
            }

        }),

        getWatchlistData: builder.query({
            queryFn: async (id) => {
                try {
                    let { data: watchlistData } = await supabase
                    .from('watchlist')
                    .select('coinId')
                    .eq('userId',`${id}`)

                    if(watchlistData.length !== 0){
                        const watchlistId =  watchlistData.map(item => item.coinId)

                        let watchlistPromise = []
                        watchlistId.map(coinId => {
                            // create a promise for each api call
                            const request = axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
                            watchlistPromise.push(request)
                        })
                        const res = await Promise.all(watchlistPromise)   
                        return {data: res}
                    }
                    else {
                        throw new Error('Your watchlist is empty.')
                    }
                } catch (error) {
                    return {error: error}
                }
            }
        }),

        getPortfolioCoinData: builder.query({
            queryFn: async (id) => {
                try {
                    let { data: portfolioData } = await supabase
                    .from('portfolio')
                    .select('coinId')
                    .eq('userId',`${id}`)
                    .not('coinId', 'eq', 'USD')

                    if(portfolioData.length !== 0){
                        const portfolioId =  portfolioData.map(item => item.coinId)

                        let portfolioPromise = []
                        portfolioId.map(coinId => {
                            // create a promise for each api call
                            const request = axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
                            portfolioPromise.push(request)
                        })
                        const res = await Promise.all(portfolioPromise)   
                        return {data: res}
                    }
                    else {
                        throw new Error('Your portfolio is empty.')
                    }
                } catch (error) {
                    return {error: error}
                }
            }
        }),

        getUserNetworth: builder.query({
            queryFn: async(id) => {
                try {
                    let { data: portfolio, error } = await supabase
                    .from('portfolio')
                    .select(`
                        coinId,
                        coinName,
                        image,
                        amount
                    `)
                    .eq('userId',`${id}`)
                    

                    if(error) {
                        throw new Error(error)
                    } 

                    if(portfolio !== []) {
                        const userNetworth = portfolio.reduce(
                            (previousValue,currentCoin) => previousValue + currentCoin.amount,0
                        )

                        const { data, error } = await supabase
                        .from('users')
                        .update({ networth: userNetworth })
                        .eq('userId', `${id}`)

                        if(error) {
                            throw new Error(error)
                        }

                        if(data){
                            return {data: userNetworth}
                        }
                    }
                    else{
                        throw new Error("Something went wrong!")
                    }

                } catch (error) {
                    return {error:error}
                }
            }
        }),
        getLeaderboard:builder.query({
            queryFn: async() => {
                try {
                    let { data: users, error } = await supabase
                    .from('users')
                    .select('username,networth')
                    .order('networth', { ascending: false })
                    .limit(100)

                    if(error) {
                        throw new Error(error)
                    }

                    return {data: users}
                } catch (error) {
                    return {error: error}
                }  
            }
        }),
        fetchAvailableCoins:builder.query({
            queryFn: async(id) => {
                try {
                    // get available coins
                    let { data: availableUsdCoin, error } = await supabase
                    .from('portfolio')
                    .select('coinId,coinName,amount')
                    .eq('userId',`${id}`)
                    .eq('coinId','USD')

                    if(error) {
                        throw new Error(error)
                    }

                    return {data: availableUsdCoin}
                } catch (error) {
                    return {error: error}
                }  
            }
        })
    })
})


export const {useGetPortfolioDataQuery,useGetWatchlistDataQuery,useGetUserNetworthQuery,useGetLeaderboardQuery,useFetchAvailableCoinsQuery,useGetPortfolioCoinDataQuery} = supabaseApi