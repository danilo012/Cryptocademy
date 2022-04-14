import React from 'react'
import {motion} from 'framer-motion'   
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Logout from '../Components/Buttons/Logout'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useAuth } from '../Context/AuthContext'
import { useFetchAvailableCoinsQuery, useGetLeaderboardQuery, useGetPortfolioDataQuery, useGetUserNetworthQuery, useGetWatchlistDataQuery } from '../services/supabaseApi'

const UserProfile = () => {
  const {currentUser} =useAuth()

  // fetch watchlist coin data
  const { data:watchlistData, error:fetchWatchlistErr, isLoading:fetchWatchlistLoading,isSuccess:fetchWatchlistSuccess } = useGetWatchlistDataQuery(currentUser.uid)

  // Get user networth
  const { data:userNetworth, isSuccess:userNetworthSuccess, error:networthError } = useGetUserNetworthQuery(currentUser.uid)

  // get available coins
  const { data:availableUsdCoins, isSuccess:fetchAvailableUsdCoinsSuccess, error:fetchAvailableUsdCoinsError, isLoading: fetchAvailableUsdCoinsLoading,refetch:refetchAvailableCoins } = useFetchAvailableCoinsQuery(currentUser.uid)

  // get Leaderboard data
  const { data:leaderboard,  isLoading:leaderboardIsLoading,isSuccess:fetchLeaderboardSuccess,error:fetchLeaderboardError } = useGetLeaderboardQuery()

  const { data:portfolioData, error, isLoading,isFetching,isSuccess,refetch:refetchPortfolioData } = useGetPortfolioDataQuery(currentUser.uid)

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <motion.div 
            intial = {{opacity:0}}
            animate = {{opacity:1}}
            exit = {{opacity:0, transition:{duration: 0.2}}}
            className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">

          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3'>Your Profile</p>

            
            <div class="flex flex-wrap md:space-x-4  justify-center md:justify-start">

              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700  overflow-hidden shadow rounded-lg w-[100%] md:w-72 xl:w-80 relative mx-4">
                  <img src="https://img.icons8.com/officel/80/000000/anime-emoji.png" alt="btc logo" className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"/>
                  <div className="px-4 py-5 sm:p-6 ">
                    <div className="flex items-center p-2  space-x-4 justify-self-end cursor-pointer">
                      <img src={`https://avatars.dicebear.com/api/initials/${currentUser.displayName}.svg`} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                      <div>
                            <h2 className="text-lg font-semibold text-white">{currentUser.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">{currentUser.email}</a>
                            </span>
                        </div>
                    </div>
                    <div className='my-4' >
                      <Link to='/forgotPassword' className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Change Your Password
                      </Link>
                    </div>
                  <Logout/>
                  </div>
              </div>
              {/* account balance information */}
              <div class="mt-8 md:mt-0 w-80 m-auto md:m-0 md:w-96 h-56 lg:ml-8 bg-gradient-to-tr from-gray-900 to-gray-700  rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                  <div class="w-full px-8 absolute top-8">
                      <div class="flex justify-between">
                          <div class="">
                              <h1 class="">
                                  Name
                              </h1>
                              <p class="font-medium tracking-wide">
                                  {currentUser.displayName}
                              </p>
                          </div>
                          <img class="w-14 h-14" src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"/>
                      </div>
                      <div class="pt-1">
                          <h1 class="">
                              Account Balance
                          </h1>
                          <p class="font-medium tracking-more-wider">
                              ${fetchAvailableUsdCoinsSuccess && availableUsdCoins[0]?.amount}
                          </p>
                      </div>
                      <div class="pt-6 pr-6">
                          <div class="flex justify-between">
                              <div class="">
                                  <h1 class="font-light text-xs">
                                      Networth
                                  </h1>
                                  <p class="font-medium tracking-wider text-sm">
                                      {userNetworthSuccess && <span>${userNetworth}</span>}
                                  </p>
                              </div>
                              {/* <div class="">
                                  <p class="font-light text-xs ">
                                      Expiry
                                  </p>
                                  <p class="font-medium tracking-wider text-sm">
                                      03/25
                                  </p>
                              </div> */}

                              <div class="">
                                  <p class="font-light text-xs">
                                      CVV
                                  </p>
                                  <p class="font-bold tracking-more-wider text-sm">
                                      ···
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

            </div>
            {/* user watchlist & portfolio */}
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2  mt-8">
                
              {/* watchlist data */}
              <div className=" shadow-lg mx-auto rounded-2xl bg-black w-[90%]">
                  <p className='text-white font-bold text-2xl md:text-3xl font-title my-4'>Your Watchlist</p>
                  
                  <ul>
                  {   
                      (fetchWatchlistErr) ?
                      <div  className=" shadow-lg rounded-2xl  px-4 py-4 md:px-4 bg-gray-900 flex flex-col ;lg:justify-center " >
                          <p className='text-white text-xl font-bold my-2 lg:text-center'>Your watchlist is empty</p>
                          <p className='text-white lg:text-center mb-5'>Press the button to browse all the coins</p>
                          <Link to='/app/market' className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                              View Coins
                          </Link>
                      </div>
                      :
                      fetchWatchlistSuccess && 
                      watchlistData.slice(0,7).map((coin,index) => (
                          <li className="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800 ">
                              <div className="flex items-center justify-start text-sm space-x-3">
                                  <img src={coin.data.image.large} alt={`${coin.data.name}`} className="w-10 h-10" />
                                  <div className=''>
                                      <p className='text-white text-xl font-bold '>{coin.data.name}</p>
                                      <p className='text-white text-sm uppercase'>{coin.data.symbol}</p>
                                  </div>
                              </div>
                              <div className="">
                                  <p className="text-white font-medium">
                                      ${coin.data.market_data.current_price.usd}
                                      <br />
                                      
                                  </p>
                                  <p className={`text-right ${coin.data?.market_data.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"} font-semibold`}
                                  >
                                      {coin.data?.market_data.price_change_percentage_24h >= 0 && "+"} 
                                      {coin.data?.market_data.price_change_percentage_24h?.toFixed(2)}%
                                  </p>
                              </div>
                          </li>
                      ))     
                  }
                  </ul>
              </div>
              {/* portfolio Data */}
              <div className=" shadow-lg mx-auto rounded-2xl bg-black w-[90%]">
                  <p className='text-white font-bold text-2xl md:text-3xl font-title my-4'>Your Portfolio</p>
                  
                  <ul>
                  {   
                      (error) ?
                      <div  className=" shadow-lg rounded-2xl  px-4 py-4 md:px-4 bg-gray-900 flex flex-col ;lg:justify-center " >
                          <p className='text-white text-xl font-bold my-2 lg:text-center'>Your portfolio is empty</p>
                          <p className='text-white lg:text-center mb-5'>Press the button to browse all the coins</p>
                          <Link to='/app/market' className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                              View Coins
                          </Link>
                      </div>
                      :
                      isSuccess && 
                      portfolioData.slice(0,7).map((coin,index) => (
                          <li className="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800 ">
                              <div className="flex items-center justify-start text-sm space-x-3">
                                  <img src={coin.image} alt={`${coin.coinName}`} className="w-10 h-10" />
                                  <div className=''>
                                      <p className='text-white text-xl font-bold '>{coin.coinName}</p>
                                      <p className='text-white text-sm uppercase'>{coin.coinSymbol}</p>
                                  </div>
                              </div>
                              <div className="">
                                  <p className="text-white font-medium text-right">
                                      {coin.coinAmount} {coin.coinSymbol}
                                      <br />    
                                  </p>
                                  <p className="text-gray-400 font-medium text-right">
                                      ${coin.amount}    
                                  </p>
                                  
                              </div>
                          </li>
                      ))     
                  }
                  </ul>
              </div>

            </div>
          {/* leaderboard */}
          <div>
              <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 px-4 md:px-6 mt-6 md:mt-16'>Global Leaderboard</p>
              
              <ul className="px-2 md:px-12 flex flex-col space-y-1 pb-12 text-white">
                  {/* Table Head */}
                  <li className="grid grid-cols-3 text-gray-500 py-2 px-1md:px-5 cursor-pointer border-b-2 border-white" >
                      <div className=""> 
                          <p className='text-white pl-4'>Rank</p>
                      </div>
                      <div className="flex items-center justify-start ml-auto md:ml-0 ">
                          <p className="w-28 md:w-40  text-white break-all text-left">Player</p>
                      </div>
                      <div className="flex items-center justify-end ml-auto md:ml-0 ">
                          <p className="w-24 md:w-40  text-white text-right mr-2">Networth</p>
                      </div>
                  </li>
                  {   
                      (fetchLeaderboardError) ?
                      <p className='text-red-500 text-xl'>Something went wrong</p>
                      :
                      fetchLeaderboardSuccess && 
                      leaderboard.slice(0,5).map((user,index) => (
                          <li key={index} className="grid grid-cols-3 text-gray-500 py-2 px-1 md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >

                              <div className="flex items-center space-x-2 "> 
                                  <p className='pl-1'>{index+1}</p>
                                  {
                                      ((index+1) === 1) &&
                                      <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-trophy-reward-and-badges-justicon-flat-justicon-1.png" alt='gold trophy' className='w-8 h-8' />
                                  }
                                  {
                                      ((index+1) === 2) &&
                                      <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-trophy-baseball-justicon-flat-justicon.png" alt='silver trophy' className='w-8 h-8' />
                                  }
                                  {
                                      ((index+1) === 3) &&
                                      <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-trophy-reward-and-badges-justicon-flat-justicon-4.png" alt='3rd rank trophy' className='w-8 h-8' />
                                  }
                              </div>
                              <div className="flex items-center justify-start ml-auto md:ml-0 ">
                                  <p className="w-28 md:w-40 truncate text-white font-medium">
                                      {user.username}
                                  </p>
                              </div>
                              <div className="flex items-center justify-end ml-auto md:ml-0 ">
                                  <p className="w-28 md:w-40 break-all text-white font-medium text-right">
                                      ${user.networth}
                                  </p>
                              </div>
                          </li>
                      ))     
                  }
              </ul>
          </div>

        </motion.div>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default UserProfile