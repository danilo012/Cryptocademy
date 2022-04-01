import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import Logout from '../Components/Buttons/Logout'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../Features/UserSlice'
import { supabase } from '../Utils/init-supabase'
import { useGetWatchlistData } from '../services/coinsDataApi'

const Dashboard = () => {
  const {currentUser} =useAuth()
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3'>Welcome to Dashboard</p>
        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Dashboard