import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { db } from '../Utils/init-firebase'
const News = () => {
  const [news,setNews] = useState(null)
  const newsCollectionRef = collection(db,"cryptoNews")
  const demoImage = 'https://source.unsplash.com/fsSGgTBoX9Y'

  useEffect(()=> {
    const getNews = async () => {
      const data = await getDocs(newsCollectionRef)
      const news = data.docs[0].data().news
      setNews(news)
      console.log(news)
    }
    getNews()
  },[])
  
  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          <section class="px-4 py-12 mx-auto max-w-[90rem]">
            <h2 class="mb-2 text-3xl font-extrabold leading-tight text-white font-title">Latest Cryptocurrency News</h2>
            <p class="mb-20 text-lg text-gray-500">Comes directly from the desk of engineers, creators and managers at Skcript.</p>
            
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {
                news?.map(news => (
                  <a
                    class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
                    href={news.url} rel='noreferrer'target="_blank"
                  >
                    <span
                      class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div class="justify-between sm:flex">
                      <div>
                        <h5 class="text-xl font-bold text-white">
                          {news.name}
                        </h5>
                        <p class="mt-1 text-xs font-medium text-gray-400">By {news.provider[0].name}</p>
                      </div>

                      <div class="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                          class="object-cover w-16 h-16 rounded-lg shadow-sm"
                          src={news?.image?.thumbnail?.contentUrl || demoImage}
                          alt="News cover image"
                        />
                      </div>
                    </div>

                    <div class="mt-4 sm:pr-8">
                      <p class="text-sm text-gray-500 line-clamp-4">
                        {news.description}
                      </p>
                    </div>

                    <dl class="flex mt-6">
                      <div class="flex flex-col-reverse">
                        <dt class="text-sm font-medium text-gray-500">Published</dt>
                        <dd class="text-xs text-gray-500">{news.datePublished.substring(0,10)}</dd>
                      </div>
                    </dl>
                  </a>
                ))
              }
            </div>
            </section>


        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default News