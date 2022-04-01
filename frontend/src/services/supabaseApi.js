import {createApi,fakeBaseQuery,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '../Utils/init-supabase'

export const supabaseApi = createApi({
    reducerPath: "supabaseApi",
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getPortfolioData: builder.query({
            async queryFn(id)  {  
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
                    return {data: portfolio}
                } catch (error) {
                    return {error: error}
                }                 
            }

        })
    })
})


export const {useGetPortfolioData} = supabaseApi