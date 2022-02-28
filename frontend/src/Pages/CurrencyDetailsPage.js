import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useGetCoinDataQuery, useGetHistoricalDataQuery } from '../services/coinsDataApi'
import dollarSvg from '../Assets/svg/dollar.svg'
import CoinChart from '../Components/CoinChart'

const CurrencyDetailsPage = () => {
  const {id} = useParams()
  const [chartDays,setChartDays] = useState('365')

  const { data, error, isLoading,isFetching,isSuccess,refetch } = useGetCoinDataQuery(id,{pollingInterval: 2000,})

  const { data:historicalData, error:historicalDataError, isLoading:historicalDataLoading,isFetching:historicalDataFetching,isSuccess:historicalDataSuccess,refetch:refetchHistoricalData } = useGetHistoricalDataQuery({id,chartDays})
   
  useEffect(()=> {
    refetchHistoricalData()
  },[chartDays])

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black  md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          {isLoading && <p className='text-white text-3xl'>...Loading</p>}
          {error && <p className='text-red-500 text-3xl'>Something went wrong</p>}
          {
            isSuccess &&
            <div className='mt-6 mx-2 md:mx-4 '>
              <div className='flex flex-col md:flex-row md:space-x-8'>

                <div className='flex items-center space-x-2' >
                  <img src={data.image.large} className="w-12" alt={data.name} />
                  <div>
                    <p className='text-white font-title text-3xl font-bold' >{data.name}</p>
                    <p className='text-gray-300 text-md font-semibold' >{data.symbol}</p>
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
                            {data.market_data.price_change_percentage_24h}
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
                            {data.market_data.total_volume.usd}
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
          {historicalDataLoading && <p className='text-white text-3xl'>...Loading</p>}
          <div className="my-6 inline-flex justify-center rounded-md shadow-sm" role="group">
              <button onClick={() => setChartDays(() => '1')} type="button" className="py-2 px-4 text-sm font-medium  rounded-l-lg border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                24 Hours
              </button>
              <button onClick={() => setChartDays(() =>'30')} type="button" className="py-2 px-4 text-sm font-medium  border-t border-b  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                30 Days
              </button>
              <button onClick={() => setChartDays(() =>'90')} type="button" className="py-2 px-4 text-sm font-medium   border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                3 Months
              </button>
              <button onClick={() => setChartDays(() =>'365')}  type="button" className="py-2 px-4 text-sm font-medium  rounded-r-md border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
                1 Year
              </button>
          </div>
          {historicalDataError && <p className='text-red-500 text-3xl'>Something went wrong</p>}
          {
            historicalDataSuccess &&
            <CoinChart historicalData = {historicalData}/>
          }
        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default CurrencyDetailsPage