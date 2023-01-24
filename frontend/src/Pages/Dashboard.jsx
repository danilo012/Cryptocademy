import { lazy } from "react";

// import DesktopDashboard from "../Components/DesktopDashboard";
const DesktopDashboard = lazy(() => import("../Components/DesktopDashboard"));

const Dashboard = () => {
  return (
    <>
      <p className="pt-6 md:pt-0 text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3 px-2 md:px-4">
        Welcome to Dashboard
      </p>

      <DesktopDashboard />
    </>
  );
};

export default Dashboard;
