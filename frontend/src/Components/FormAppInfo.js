import React from 'react'
import logo from '../Assets/svg/cryptocademy-logo-sideways-light.svg'

const FormAppInfo = () => {
  return (
    <>
        <div className="hidden md:block lg:h-screen px-4  bg-gradient-to-b from-black to-gray-900 text-white xl:py-20 md:px-40 lg:px-20 xl:px-40">
            {/* logo */}
            <img src={logo} className="w-3/4 translate-x-[-10%] "   alt="cryptocademy logo"  />

            <div className="flex space-x-3 mb-8 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-green-400">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div >
                <h2 className="text-xl font-medium text-green-400">Free account</h2>
                <p className="mt-1 text-gray-300">Create apps, connect databases and add-on services, and collaborate on your apps, for free.</p>
            </div>
            </div>
            <div className="flex space-x-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-green-400">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-green-400">Your app platform</h2>
                <p className="mt-1 text-gray-300">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
            </div>
            <div className="flex space-x-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-green-400">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-green-400">Deploy now</h2>
                <p className="mt-1 text-gray-300">Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.</p>
            </div>
            </div>
            <div className="flex space-x-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-green-400">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-green-400">Free account</h2>
                <p className="mt-1 text-gray-300">Create apps, connect databases and add-on services, and collaborate on your apps, for free.</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default FormAppInfo