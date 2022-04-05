import React from 'react'
import { AiOutlineBarChart, AiOutlineSearch } from 'react-icons/ai'
import {  MdOutlineDashboard, MdOutlineMoreHoriz, MdOutlineStarBorder, MdTravelExplore } from 'react-icons/md'
import { Link } from 'react-router-dom'


const TabNavigation = () => {


  return (
    <div className=" w-full h-[200px] lg:hidden z-50 ">
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-gradient-to-b from-gray-900 to-black rounded-t-3xl ">
            <div id="tabs" className="flex justify-between">

                <Link to="/app" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                    {/* svg */}
                    <MdOutlineDashboard className='inline-block text-white w-7 h-7 mb-1'/>
                    <span className="tab tab-whishlist block text-white text-xs">Dashboard</span>
                </Link>

                <Link to="/app/market" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                    {/* svg */}
                    <AiOutlineBarChart className='inline-block text-white w-7 h-7 mb-1'/>
                    <span className="tab tab-whishlist block text-white text-xs">Market</span>
                </Link>

                <Link to="/app/portfolio" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                    <MdOutlineStarBorder className='inline-block text-white w-7 h-7 mb-1'/>  
                    <span className="tab tab-home block text-white text-xs">Portfolio</span>
                </Link>

                <Link to="/app/search" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                    {/* svg */}
                    <AiOutlineSearch className='inline-block text-white w-7 h-7 mb-1'/>  
                    <span className="tab tab-kategori block text-white text-xs">Search</span>
                </Link>

                <Link to="/app/more" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                    {/* svg */}
                    <MdOutlineMoreHoriz className='inline-block text-white w-7 h-7 mb-1'/>  
                    <span className="tab tab-account block text-white text-xs">More</span>
                </Link>

            </div>
        </section>
    </div>
//     <div className="mt-20 fixed inset-x-0 bottom-0 z-10 bg-gradient-to-b from-gray-900 to-black rounded-t-3xl text-sm font-medium text-center  border-b text-gray-400 border-gray-700 ">
//     <ul className="flex -mb-px justify-center">
//         <li className=" flex flex-col justify-center items-center px-1 py-4 ">
//             {/* svg */}
//             <MdOutlineDashboard className='inline-block text-white w-5 h-5 mb-1'/>
//             <a href="#" className="inline-block rounded-t-lg border-b-2 border-transparent text-xs hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Dashboard</a>
//         </li>
//         <li className=" flex flex-col justify-center items-center px-1 py-4 ">
//             {/* svg */}
//             <MdOutlineDashboard className='inline-block text-white w-5 h-5 mb-1'/>
//             <a href="#" className="inline-block rounded-t-lg border-b-2 border-transparent text-xs hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Market</a>
//         </li>
//         <li className=" flex flex-col justify-center items-center px-1 py-4 ">
//             {/* svg */}
//             <MdOutlineDashboard className='inline-block text-white w-5 h-5 mb-1'/>
//             <a href="#" className="inline-block rounded-t-lg border-b-2 border-transparent text-xs hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Portfolio</a>
//         </li>
//         <li className=" flex flex-col justify-center items-center px-1 py-4 ">
//             {/* svg */}
//             <MdOutlineDashboard className='inline-block text-white w-5 h-5 mb-1'/>
//             <a href="#" className="inline-block rounded-t-lg border-b-2 border-transparent text-xs hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Search</a>
//         </li>
//         <li className=" flex flex-col justify-center items-center px-1 py-4 ">
//             {/* svg */}
//             <MdOutlineDashboard className='inline-block text-white w-5 h-5 mb-1'/>
//             <a href="#" className="inline-block rounded-t-lg border-b-2 border-transparent text-xs hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Dashboard</a>
//         </li>
        
//     </ul>
// </div>
  )
}


export default TabNavigation