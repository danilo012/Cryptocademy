import React, { useEffect } from 'react'
import { useGetCoinsDataQuery } from '../services/coinsDataApi'

const CoinsTable = () => {
  const { data, error, isLoading,isFetching,isSuccess,refetch } = useGetCoinsDataQuery()

  useEffect(()=> {
      const interval = setInterval(() => {
          console.log("refetched Data")
          refetch()
      },2000)
      return () => {
        clearInterval(interval)
      }
  })
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
    <div>
        {isLoading && <p className='text-white text-3xl'>...Loading</p>}
        {error && <p className='text-red-500 text-3xl'>Something went wrong</p>}
        <ul className="md:px-4 flex flex-col space-y-1 pb-28 text-white">
            {/* Table Head */}
            <li className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 cursor-pointer border-b-2 border-white" >
                <div className="flex justify-start items-center space-x-4"> 
                    <p className='text-white pl-4'>Name</p>
                </div>
                <div className="flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-24 md:w-40  text-white">Price</p>
                </div>
                <div className="hidden lg:flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-24 md:w-40  text-white">24h Change</p>
                </div>
                <div className="hidden lg:flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-24 md:w-40  text-white">Market Cap</p>
                </div>
            </li>
            {/* coin prices */}
            {
                isSuccess &&
                data?.map((coins,index) => (
                    <li key={index} className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >
                        <div className="flex items-center space-x-2 "> 
                            <p className='pl-1'>{index+1}</p>
                            <img className="h-8 w-8 md:h-10 md:w-10 object-contain" src={coins.image} alt="cryptocurrency image " loading='lazy' />
                            <div>
                                <p className=" w-64 truncate text-white break-words">{coins.name}</p>
                                <div className='flex space-x-1'>
                                    <p>{coins.symbol}</p>
                                    <p className={`md:hidden w-24 md:w-40 ${coins?.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} font-semibold`}
                                    >
                                    {coins?.price_change_percentage_24h >= 0 && "+"} 
                                    {coins?.price_change_percentage_24h?.toFixed(2)}%
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex items-center justify-end ml-auto md:ml-0 ">
                            <p className="w-36 text-white font-medium">
                                ${coins.current_price}
                                <br />
                                <span className="md:hidden w-28 md:w-40 text-gray-500">MCap: {normalizeMarketCap(coins.market_cap)}</span>
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center justify-end ml-auto md:ml-0 ">
                            <p className={`w-24 md:w-40 ${coins?.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} font-semibold`}
                            >
                             {coins?.price_change_percentage_24h >= 0 && "+"} 
                             {coins?.price_change_percentage_24h?.toFixed(2)}%
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center justify-end ml-auto md:ml-0 ">
                            <p className="w-24 md:w-40  ">{coins.market_cap}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default CoinsTable