import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import DesktopDashboard from '../Components/DesktopDashboard'

const Dashboard = () => {

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">

          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3 px-2 md:px-4'>Welcome to Dashboard</p>

            <DesktopDashboard />


          {/* <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3 px-1 md:px-4'>Trending Coins</p> */}

          {/* <div className='relative'>
            <div id='carousel' className="carousel carousel-center max-w-[95vw] lg:max-w-screen p-4 space-x-4  lg:m-0">
              {
                isSuccess &&
                trendingCoins.coins.map((coin,index) => (
                  <div className="carousel-item ">
                    <div  className=" shadow-lg rounded-2xl  px-2 py-4 md:px-4 bg-gray-900 w-72 " >
                      <img src={coin.item.large} alt={`${coin.item.name}`} className="w-10 h-10" />
                      <p className='text-white text-xl font-bold my-2'>{coin.item.name}</p>
                      <p className='text-white'>${coin.item.price_btc}</p>
                      <p className='text-white'>{coin.item.symbol}</p>
                    </div>   
                  </div>
                ))
              }
            </div>
          </div> */}

        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Dashboard