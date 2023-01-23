import { useEffect } from "react";
import { motion } from "framer-motion";

import { useGetNewsQuery } from "../services/NewsApi";

import Loader from "../Components/Loader";
import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";

const News = () => {
  const demoImage = "https://source.unsplash.com/fsSGgTBoX9Y";

  // get news
  const {
    data: news,
    isSuccess: fetchNewsSuccess,
    error: fetchNewsError,
    isLoading: fetchNewsLoading,
    refetch
  } = useGetNewsQuery();

  useEffect(() => {
    if (!news) {
      refetch();
    }
  }, []);

  return (
    <div className="bg-black">
      {/* desktop dasboard */}
      {fetchNewsLoading && <Loader />}
      {fetchNewsError && <p className="text-red-400 text-xl">Something went Wrong</p>}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={`news`} />
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black "
        >
          <section className="px-4 py-12 mx-auto max-w-[90rem]">
            <h2 className="mb-8 text-3xl font-extrabold leading-tight text-white font-title">
              Latest Cryptocurrency News
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {fetchNewsSuccess &&
                news?.map((news) => (
                  <a
                    className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
                    href={news.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                    <div className="justify-between sm:flex">
                      <div>
                        <h5 className="text-xl font-bold text-white">{news.name}</h5>
                        <p className="mt-1 text-xs font-medium text-gray-400">
                          By {news.provider[0].name}
                        </p>
                      </div>

                      <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                          className="object-cover w-16 h-16 rounded-lg shadow-sm"
                          src={news?.image?.thumbnail?.contentUrl || demoImage}
                          alt="News cover"
                        />
                      </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                      <p className="text-sm text-gray-500 line-clamp-4">{news.description}</p>
                    </div>

                    <dl className="flex mt-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-500">Published</dt>
                        <dd className="text-xs text-gray-500">
                          {news.datePublished.substring(0, 10)}
                        </dd>
                      </div>
                    </dl>
                  </a>
                ))}
            </div>
          </section>
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default News;
