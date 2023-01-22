import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext";
import Logout from "../Components/Buttons/Logout";
import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";
import CoinsTable from "../Components/CoinsTable";
import { Helmet } from "react-helmet";
const CoinMarket = () => {
  const { currentUser } = useAuth();
  return (
    <div className="bg-black">
      <Helmet>
        <title>Cryptocademy - Learn to invest like a pro.</title>
        <meta
          name="description"
          content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."
        />
        <link rel="canonical" href="https://cryptocademy.pages.dev/" />
        <meta property="og:title" content="Learn to invest like a pro" />
        <meta
          property="og:description"
          content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."
        />
        <meta property="og:image" content="/Assets/images/cryptocademy-logo-big-light.png" />
        <meta property="og:image:width" content="2727" />
        <meta property="og:image:height" content="1952" />
        <meta property="og:site_name" content="Cryptocademy" />
        <meta property="og:type" content="Trading,Investment,Courses,Learning" />
        <meta name="language" content="EN" />
        <meta name="author" content="Cryptocademy" />
      </Helmet>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden pt-6 md:pt-0">
        <Sidebar active={`market`} />
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black "
        >
          <p className="text-white font-bold text-2xl md:text-3xl font-title mt-4 ml-3">
            Cryptocurrency Prices
          </p>
          <CoinsTable />
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default CoinMarket;
