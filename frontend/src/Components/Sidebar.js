import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import robot from '../Assets/images/robot.png'
import { MdOutlineBusinessCenter, MdOutlineWatchLater, MdTravelExplore } from "react-icons/md";
import { AiOutlineHome,AiOutlineRobot,AiOutlineBarChart, AiOutlineSearch} from "react-icons/ai";
import { useAuth } from '../Context/AuthContext';
import { BsFillBarChartFill } from 'react-icons/bs';

const Sidebar = ({openSidebar}) => {
    const {currentUser} =useAuth()

    return (
        <aside
            className={`sidebar w-64 md:shadow transform ${openSidebar ? "translate-x-0" : "-translate-x-full "}   lg:translate-x-0 transition-transform duration-150 ease-in bg-black fixed top-0 left-0 h-[100vh] border-r-2 border-white`}
            >
            <div className="sidebar-header flex items-center pl-6 py-4">
                <Link to="/app" className="inline-flex flex-row items-center">
                    <span className="leading-10 text-gray-100 text-4xl font-bold font-redressed">Cryptocademy</span>
                </Link>
            </div>
            <div className="sidebar-content px-4 ">
                <ul className="flex flex-col w-full">
                
                <li className="my-px">
                    <Link
                    to="/app"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <AiOutlineHome className='text-white w-6 h-6 hover:text-black' />
                    </span>
                    <span className="ml-3">Home</span>
                    </Link>
                </li>
                
                                
                <li className="my-px">
                    <Link
                    to="/app/search"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <AiOutlineSearch className='text-white w-6 h-6'/>
                    </span>
                    <span className="ml-3">Search</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/app/market"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <AiOutlineBarChart className='text-white w-6 h-6'/>
                    </span>
                    <span className="ml-3">Market</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/app/watchlist"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <MdOutlineWatchLater className='text-white w-6 h-6'/>  
                    </span>
                    <span className="ml-3">Watchlist</span>
                    </Link>
                </li>


                <li className="my-px">
                    <Link
                    to="/app/portfolio"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <MdOutlineBusinessCenter className='text-gray-300 w-6 h-6'/>    
                    </span>
                    <span className="ml-3">Portfolio</span>
                    </Link>
                </li>
                                
                <li className="my-px">
                    <Link
                    to="/app/ai"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400 ">
                        <AiOutlineRobot className='text-white w-6 h-6'/>  
                    </span>
                    
                    <span className="ml-3">AI Predictions</span>
                    </Link>
                </li>
                                
                <li className="my-px">
                    <Link
                    to="/app/leaderboard"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400 ">
                        <BsFillBarChartFill className='text-white w-6 h-6'/>  
                    </span>
                    
                    <span className="ml-3">Global Leaderboard</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/app/news"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 "
                    >
                    <span className="flex items-center justify-center text-lg text-red-400">
                        <MdTravelExplore className='text-gray-300 w-6 h-6'/>    
                    </span>
                    <span className="ml-3">News</span>
                    </Link>
                </li>
                <li>        
                    <Link to="/app/profile" className="flex items-center p-2 mt-5 space-x-4 justify-self-end cursor-pointer">
                        <img src={`https://avatars.dicebear.com/api/initials/${currentUser.displayName}.svg`} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold text-white">{currentUser.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                            </span>
                        </div>
                    </Link>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar