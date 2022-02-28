import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({openSidebar}) => {
    return (
        <aside
            className={`sidebar w-64 md:shadow transform ${openSidebar ? "translate-x-0" : "-translate-x-full "}    md:translate-x-0 transition-transform duration-150 ease-in bg-black fixed top-0 left-0 h-[100vh] border-r-2 border-white `}
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
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:text-black hover:bg-gray-100 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block  text-gray-300 mb-1 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="ml-3">Coins</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/admin"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:text-black hover:bg-gray-100 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block  text-gray-300 mb-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                    <span className="ml-3">Watchlist</span>
                    </Link>
                </li>

                
                <li className="my-px">
                    <Link
                    to="/admin/productlist"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:text-black hover:bg-gray-100 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        {/* svg */}
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-7 w-7 inline-block  text-gray-300 mb-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>
                    <span className="ml-3">Order</span>
                    </Link>
                </li>
                
                <li className="my-px">
                    <Link
                    to="/admin/orderlist"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:text-black hover:bg-gray-100 "
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg"   className="h-7 w-7 inline-block  text-gray-300 mb-1 "fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span className="ml-3">Portfolio</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/app/news"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:text-black hover:bg-gray-100 "
                    >
                    <span className="flex items-center justify-center text-lg text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </span>
                    <span className="ml-3">News</span>
                    </Link>
                </li>
                <li>        
                    <div className="flex items-center p-2 mt-5 space-x-4 justify-self-end cursor-pointer">
                        <img src={`https://avatars.dicebear.com/api/initials/NarottamSahu.svg`} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold text-white">Narottam Sahu</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                            </span>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar