import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes'
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';


function App() {
  
  return (
    <div className="App scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-black">
      <BrowserRouter>
        <ScrollToTop/>
        <React.Suspense fallback={
          <div className='w-screen h-screen bg-black'>
            <Loader/>
          </div>
        }>
          <AnimatedRoutes/>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
