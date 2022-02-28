import React, { useEffect, useState } from 'react'
import { useGetCoinsDataQuery } from '../services/coinsDataApi'
import Pagination from './Pagination'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router'


const CoinsTable = () => {
    const navigate = useNavigate()
    const [coinsData,setCoinsData] = useState()
    const [currency,setCurrency] = useState('usd')
    const [search,setSearch] = useState('')
    const [searchData,setSearchData] = useState('')
    const [page,setPage] = useState(1)
    
    const { data, error, isLoading,isFetching,isSuccess,refetch } = useGetCoinsDataQuery(currency,{pollingInterval: 2000,})


    const handleSearch = () => {
        const filteredData = data.filter(
            (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
        setSearchData(filteredData)
        console.log(searchData)
    }

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
        {/* search Bar */}
        <div className="p-4">
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className=" border w-full   text-sm rounded-lg  block  pl-10 p-2.5  bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for Cryptocurrency..." onChange={(e) => {
                    setSearch(e.target.value)
                    handleSearch()
                }} />
            </div>
        </div>
        {/* pagination */}
        {/* <Pagination count={(data?.length/30).toFixed(0)} /> */}
        {/* <ReactPaginate 
            previousLabel={'<'}
            nextLabel = {'>'}
            breakLabel={'...'}
            pageCount={(data?.length/30).toFixed(0)}
            onPageChange={(data)=> setPage(Number(data.selected+1))}
        /> */}
        {/* coin table */}
        <ul className="md:px-4 flex flex-col space-y-1 pb-28 text-white">
            {/* Table Head */}
            <li className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 cursor-pointer border-b-2 border-white" >
                <div className="flex justify-start items-center space-x-4"> 
                    <p className='text-white pl-4'>Name</p>
                </div>
                <div className="flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-28 md:w-40  text-white">Price</p>
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
                (searchData && search) ?
                searchData?.map((coins,index) => (
                    <li key={index} onClick={()=> navigate(`/app/coin/${coins.id}`)} className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >
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
                            <p className="w-28 md:w-40 text-white font-medium">
                                ${coins.current_price}/-
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
                :
                isSuccess &&
                data?.map((coins,index) => (
                    <li key={index} onClick={()=> navigate(`/app/coin/${coins.id}`)} className="grid grid-cols-2 md:grid-cols-4 text-gray-500 py-2 px-1md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >
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
                            <p className="w-28 md:w-40 text-white font-medium">
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