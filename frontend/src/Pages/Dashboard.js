import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import DesktopDashboard from '../Components/DesktopDashboard'
import { Helmet } from 'react-helmet'

const Dashboard = () => {

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={`home`} />
        <main className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">

          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3 px-2 md:px-4'>Welcome to Dashboard</p>

            <DesktopDashboard />

        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Dashboard