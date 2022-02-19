import React from 'react'
import { useAuth } from '../Context/AuthContext'
import Logout from '../Components/Buttons/Logout'
const Dashboard = () => {
    const {currentUser} = useAuth() 
  return (
    <div>
        <h1>Dashboard</h1>
        <Logout/>
    </div>
  )
}

export default Dashboard