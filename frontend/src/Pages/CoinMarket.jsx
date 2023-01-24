import { lazy } from "react";

// import { useAuth } from "../Context/AuthContext";

// import CoinsTable from "../Components/CoinsTable";
const CoinsTable = lazy(() => import("../Components/CoinsTable"));

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
