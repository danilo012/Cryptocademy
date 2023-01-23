import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// import { useAuth } from "../Context/AuthContext";

import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";
import CoinsTable from "../Components/CoinsTable";

const CoinMarket = () => {
  // const { currentUser } = useAuth();
  return (
    <>
      <p className="text-white font-bold text-2xl md:text-3xl font-title mt-4 ml-3">
        Cryptocurrency Prices
      </p>
      <CoinsTable />
    </>
  );
};

export default CoinMarket;
