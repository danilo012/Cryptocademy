import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PushNotifications } from "@capacitor/push-notifications";

import "./App.css";

import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    const registerNotifications = async () => {
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === "prompt") {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== "granted") {
        console.log("User denied permissions!");
        return;
      }

      await PushNotifications.register();
    };
    registerNotifications();
  }, []);

  return (
    <div className="App scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-black">
      <BrowserRouter>
        <ScrollToTop />
        {/* <Suspense
          fallback={
            <>
              {window?.location?.pathname?.includes("/app", 0) ? (
                <div className="bg-black ">
                  <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
                    <Sidebar active={`home`} />
                    <div className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black text-white text-4xl">
                      <div className="z-10">
                        <Loader />
                      </div>
                    </div>
                  </div>
                  <TabNavigation />
                </div>
              ) : (
                <div className="w-screen h-screen bg-black">
                  <Loader />
                </div>
              )}
              <div className="w-screen h-screen bg-black">
                <Loader />
              </div>
            </>
          }
        >
          <AnimatedRoutes />
        </Suspense> */}
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
