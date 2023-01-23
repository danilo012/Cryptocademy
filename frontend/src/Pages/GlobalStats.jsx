import React from "react";
import { motion } from "framer-motion";

import { useGetGlobalCryptoDataQuery } from "../services/coinsDataApi";

import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";
import PieChart from "../Components/PieChart";
import Loader from "../Components/Loader";

const GlobalStats = () => {
  const {
    data: globalCryptoData,
    // error: fetchGlobalCryptoError,
    isLoading: fetchGlobalCryptoLoading,
    isSuccess: fetchGlobalCryptoSuccess
  } = useGetGlobalCryptoDataQuery();
  return (
    <div className="bg-black">
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden pt-6 md:pt-0">
        <Sidebar />
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black "
        >
          {fetchGlobalCryptoLoading && <Loader />}
          <p className="text-white font-bold text-2xl md:text-3xl font-title mt-4 ml-3">
            Global Metrics
          </p>
          {fetchGlobalCryptoSuccess && (
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700   overflow-hidden shadow rounded-lg w-60 md:w-72 relative mx-3 mt-4">
                <img
                  src="https://img.icons8.com/clouds/200/000000/bitcoin.png"
                  alt="btc logo"
                  className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
                />
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-400 truncate">
                      Total Market Cap
                    </dt>
                    <dd className="mt-1 text-xl leading-9 font-semibold text-gray-200">
                      ${globalCryptoData.data.total_market_cap.usd.toFixed(4)}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700   overflow-hidden shadow rounded-lg w-60 md:w-72 relative mx-3 mt-4">
                <img
                  src="https://img.clankapp.com/symbol/btc.svg"
                  alt="btc logo"
                  className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
                />
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-400 truncate">
                      Active Cryptocurrencies
                    </dt>
                    <dd className="mt-1 text-xl leading-9 font-semibold text-gray-200">
                      {globalCryptoData.data.active_cryptocurrencies}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700   overflow-hidden shadow rounded-lg w-60 md:w-72 relative mx-3 mt-4">
                <img
                  src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-bank-business-and-finance-icongeek26-flat-icongeek26.png"
                  alt="btc logo"
                  className="h-24 w-24 rounded-full absolute opacity-50 -top-3 -right-6 md:-right-2"
                />
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-400 truncate">
                      Markets
                    </dt>
                    <dd className="mt-1 text-xl leading-9 font-semibold text-gray-200">
                      {globalCryptoData.data.markets}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700   overflow-hidden shadow rounded-lg w-60 md:w-72 relative mx-3 mt-4">
                <img
                  src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-bank-building-photo3ideastudio-flat-photo3ideastudio.png"
                  alt="btc logo"
                  className="h-20 w-20  absolute opacity-50 -top-3 -right-6 md:-right-2"
                />
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-400 truncate">
                      Total Volume
                    </dt>
                    <dd className="mt-1 text-xl leading-9 font-semibold text-gray-200">
                      ${globalCryptoData.data.total_volume.usd.toFixed(3)}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="  bg-gradient-to-tr from-gray-900 to-gray-700   overflow-hidden shadow rounded-lg w-60 md:w-72 relative mx-3 mt-4">
                <img
                  src="https://img.icons8.com/fluency/96/000000/bullish.png"
                  alt="btc logo"
                  className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
                />
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-400 truncate">
                      24h Market Cap Change
                    </dt>
                    <dd
                      className={`mt-1 text-3xl leading-9 font-semibold ${
                        globalCryptoData.data.market_cap_change_percentage_24h_usd >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      } `}
                    >
                      {globalCryptoData.data.market_cap_change_percentage_24h_usd.toFixed(4)}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          )}

          <p className="text-white font-bold text-2xl md:text-3xl font-title mt-8 ml-3">
            Market Dominance
          </p>
          {fetchGlobalCryptoSuccess && <PieChart globalCryptoData={globalCryptoData} />}
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default GlobalStats;
