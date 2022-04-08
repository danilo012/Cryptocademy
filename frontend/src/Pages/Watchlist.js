import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Loader from '../Components/Loader'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useAuth } from '../Context/AuthContext'
import { fetchWatchlistData } from '../Features/watchlistDataSlice'
import { useGetWatchlistDataQuery } from '../services/supabaseApi'
import { supabase } from '../Utils/init-supabase'
 
const Watchlist = () => {
  const navigate = useNavigate()
  const {currentUser} = useAuth() 
  const dispatch = useDispatch()
  // const watchlistData = useSelector(state=> state.watchlistData)
  const toastRef = useRef(null)

  // fetch watchlist coin data
  const { data:watchlistData,error, isLoading,isFetching,isSuccess,refetch } = useGetWatchlistDataQuery(currentUser.uid)

  // useEffect(()=>{
  //     if(error){
  //         toastRef.current.show()
  //     }
  // },[error])

  useEffect(()=>{
    setInterval(() => {
      console.log('i am running after 5 seconds')
      refetch()
    }, 5000);
    return () => clearInterval()
  },[])

  
  const normalizeMarketCap = (marketCap) => {
    if(marketCap > 1_000_000_000_000) {
        return `${Math.floor(marketCap / 1_000_000_000_000)} T`
    }
    if(marketCap > 1_000_000_000) {
        return `${Math.floor(marketCap / 1_000_000_000)} B`
    }
    if(marketCap > 1_000_000) {
        return `${Math.floor(marketCap / 1_000_000)} M`
    }
    if(marketCap > 1_000) {
        return `${Math.floor(marketCap / 1_000)} K`
    }
    return marketCap
  }

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={`watchlist`}/>
        <main className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3'>WatchList</p>
          {(isLoading) && <Loader/>}
          {(error) && <p className='text-2xl text-red-400'>Something went wrong</p>}
          {/* coin table */}
        <ul className="md:px-4 flex flex-col space-y-1 pb-12 text-white">
          {/* Table Head */}
          <li className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 cursor-pointer border-b-2 border-white" >
              <div className="flex justify-start items-center space-x-4"> 
                  <p className='text-white pl-4'>Name</p>
              </div>
              <div className="flex items-center justify-end ml-auto md:ml-0 ">
                  <p className="w-28 md:w-40  text-white">Price</p>
              </div>
              <div className="hidden md:flex items-center justify-end ml-auto md:ml-0 ">
                  <p className="w-24 md:w-40  text-white">24h Change</p>
              </div>
              <div className="hidden md:flex items-center justify-end ml-auto md:ml-0 ">
                  <p className="w-24 md:w-40  text-white">Market Cap</p>
              </div>
          </li>
          {
            (isSuccess) &&
            watchlistData.map((coin,index) => (
              <li key={index} onClick={()=> navigate(`/app/coin/${coin.data.id}`)} className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >
                <div className="flex items-center space-x-2 "> 
                    <p className='pl-1'>{index+1}</p>
                    <img className="h-8 w-8 md:h-10 md:w-10 object-contain" src={coin.data.image.small} alt="cryptocurrency image " loading='lazy' />
                    <div>
                        <p className=" w-64 truncate text-white break-words">{coin.data.name}</p>
                        <div className='flex space-x-1'>
                            <p>{coin.data.symbol}</p>
                            <p className={`md:hidden w-24 md:w-40 ${coin.data?.market_data.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} font-semibold`}
                            >
                            {coin.data?.market_data.price_change_percentage_24h >= 0 && "+"} 
                            {coin.data?.market_data.price_change_percentage_24h?.toFixed(2)}%
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-28 md:w-40 text-white font-medium">
                        ${coin.data?.market_data.current_price.usd}
                        <br />
                        <span className="md:hidden w-28 md:w-40 text-gray-500">MCap: {normalizeMarketCap(coin.data?.market_data.market_cap.usd)}</span>
                    </p>
                </div>
                <div className="hidden md:flex items-center justify-end ml-auto md:ml-0 ">
                    <p className={`w-24 md:w-40 ${coin.data?.market_data.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} font-semibold`}
                    >
                      {coin.data?.market_data.price_change_percentage_24h >= 0 && "+"} 
                      {coin.data?.market_data.price_change_percentage_24h?.toFixed(2)}%
                    </p>
                </div>
                <div className="hidden md:flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-24 md:w-40  ">${coin.data?.market_data.market_cap.usd}</p>
                </div>
            </li>
            ))
            
          }
        </ul>
        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Watchlist