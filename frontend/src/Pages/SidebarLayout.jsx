import { motion } from "framer-motion";
import { Outlet } from "react-router";

import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";

const SidebarLayout = () => {
  return (
    <div className="bg-black ">
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={`home`} />
        {/* page transitions */}
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black"
        >
          <Outlet />
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default SidebarLayout;
