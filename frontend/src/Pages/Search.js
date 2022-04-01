import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'

const Search = () => {
  const [search,setSearch] = useState('')
  
  const handleSearch = () => {
      
  }

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
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
            
        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Search