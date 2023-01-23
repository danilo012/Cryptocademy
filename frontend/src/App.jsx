import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PushNotifications } from "@capacitor/push-notifications";

import "./App.css";

import Loader from "./Components/Loader";
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
        <Suspense
          fallback={
            <div className="w-screen h-screen bg-black">
              <Loader />
            </div>
          }
        >
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
