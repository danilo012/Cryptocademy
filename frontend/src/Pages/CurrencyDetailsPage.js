import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useGetCoinDataQuery, useGetHistoricalDataQuery } from '../services/coinsDataApi'
import dollarSvg from '../Assets/svg/dollar.svg'
import CoinChart from '../Components/CoinChart'
import CoinStats from '../Components/CoinStats'
import ErrorToast from '../Components/ErrorToast'
import Loader from '../Components/Loader'
import { Link } from 'react-router-dom'

const CurrencyDetailsPage = () => {
  const {id} = useParams()
  const toastRef = useRef(null)

  const { data, error, isLoading,isFetching,isSuccess,refetch } = useGetCoinDataQuery(id,{pollingInterval: 2000,})

  
  useEffect(()=>{
      if(error){
          toastRef.current.show()
      }
  },[error])


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
      <div className="flex flex-row min-h-screen bg-black  md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          {isLoading && <Loader/>}
          {error && <ErrorToast message="Something Went Wrong!" ref={toastRef}/>}
          {
            isSuccess &&
            <div className='mt-6 mx-2 md:mx-4 '>
              {/* back button */}
              <Link to="/app" className='md:hidden border-2 border-white w-10 h-10 rounded-full flex justify-center items-center mb-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>

              <div className='flex flex-col md:flex-row md:space-x-8'>
                {/* coin data */}
                <div className='flex items-center space-x-2' >
                  <img src={data.image.large} className="w-12" alt={data.name} />
                  <div>
                    <p className='text-white font-title text-3xl font-bold' >{data.name}</p>
                    <p className='text-gray-300 text-md uppercase font-semibold' >{data.symbol}</p>
                  </div>
                </div>

                <div className='flex md:space-x-4 mt-4 md:mt-0'>
                  <div className="shadow-lg rounded-2xl  px-2 py-4 md:px-4 md:bg-gray-900">
                      <div className="flex items-center">
                          <p className="text-sm md:text-lg  text-gray-50 font-title">
                              PRICE
                          </p>
                      </div>
                      <div className="flex flex-col justify-start">
                          <p className=" text-lg text-left md:text-2xl text-white font-bold my-2">
                            ${data.market_data.current_price.usd}
                          </p>
                    </div>
                  </div>


                  <div className="shadow-lg rounded-2xl  px-2 py-4 md:px-4 md:bg-gray-900">
                      <div className="flex items-center">
                          <p className="text-sm md:text-lg  text-gray-50 font-title">
                            24H
                          </p>
                      </div>
                      <div className="flex flex-col justify-start">
                          <p className={ `text-lg text-left md:text-2xl font-bold my-2 ${data?.market_data.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} `}>
                            {data?.market_data.price_change_percentage_24h >= 0 && "+"}
                            {data.market_data.price_change_percentage_24h.toFixed(3)}
                            %
                          </p>
                    </div>
                  </div>
                  
                  <div className="shadow-lg rounded-2xl  px-2 py-4 md:px-4 md:bg-gray-900">
                      <div className="flex items-center">
                          <p className="text-sm md:text-lg  text-gray-50 font-title">
                              VOLUME
                          </p>
                      </div>
                      <div className="flex flex-col justify-start">
                          <p className=" text-lg text-left md:text-2xl text-white font-bold my-2">
                            {normalizeMarketCap(data.market_data.total_volume.usd)}
                          </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          }

          <div className='mt-4 mx-2 md:mx-4 flex space-x-2'>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-800 font-medium rounded-lg px-5 py-2 text-center mr-2 mb-2 text-">Watchlist</button>

            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-800 font-medium rounded-lg px-8 py-2 text-center mr-2 mb-2 text-">Buy</button>

            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-800 font-medium rounded-lg px-8 py-2  text-center mr-2 mb-2 text-">Sell</button>
          </div>

          <CoinChart id={id} />

          {
            isSuccess &&
            <CoinStats data={data}/>
          }

        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default CurrencyDetailsPage