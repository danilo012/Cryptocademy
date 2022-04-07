import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import NotFound404 from './Pages/NotFound404';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import CoinMarket from './Pages/CoinMarket';
import News from './Pages/News';
import ProtectedRoute from './Components/ProtectedRoute'
import ForgotPassword from './Pages/ForgotPassword';
import ScrollToTop from './Components/ScrollToTop';
import CurrencyDetailsPage from './Pages/CurrencyDetailsPage';
import Watchlist from './Pages/Watchlist';
import Portfolio from './Pages/Portfolio';
import Dashboard from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile';
import Search from './Pages/Search';
import AiPredections from './Pages/AiPredections';
import Leaderboard from './Pages/Leaderboard';
import MoreMobileNavPage from './Pages/MoreMobileNavPage';
import GlobalStats from './Pages/GlobalStats';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path = "/" element={<Login/>} />

          {/* <Route path = "/app" element={<Dashboard/>} />
          <Route path = "/app/market" element={<CoinMarket/>} />
          <Route path = "/app/search" element={<Search/>} />
          <Route path = "/app/ai" element={<AiPredections/>} />
          <Route path = "/app/coin/:id" element={<CurrencyDetailsPage/>} />
          <Route path = "/app/news" element={<News/>} />
          <Route path = "/app/watchlist" element={<Watchlist/>} />
          <Route path = "/app/portfolio" element={<Portfolio/>} />
          <Route path = "/app/profile" element={<UserProfile/>} /> */}
          <Route path = "/app" 
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/market" 
            element={
              <ProtectedRoute>
                <CoinMarket/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/search" 
            element={
              <ProtectedRoute>
                <Search/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/leaderboard" 
            element={
              <ProtectedRoute>
                <Leaderboard/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/ai" 
            element={
              <ProtectedRoute>
                <AiPredections/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/coin/:id" 
            element={
              <ProtectedRoute>
                <CurrencyDetailsPage/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/news" 
            element={
              <ProtectedRoute>
                <News/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/watchlist" 
            element={
              <ProtectedRoute>
                <Watchlist/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/portfolio" 
            element={
              <ProtectedRoute>
                <Portfolio/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/profile" 
            element={
              <ProtectedRoute>
                <UserProfile/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/more" 
            element={
              <ProtectedRoute>
                <MoreMobileNavPage/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/app/market/globalStats" 
            element={
              <ProtectedRoute>
                <GlobalStats/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/signup" element={<Signup/>} />
          <Route path = "/resetPassword" element={<ResetPassword/>} />
          <Route path = "/forgotPassword" element={<ForgotPassword/>} />
          <Route path = "*" element={<NotFound404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
