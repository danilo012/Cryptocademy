import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {Route,Routes,useLocation} from 'react-router-dom'


import NotFound404 from '../Pages/NotFound404';
import ProtectedRoute from '../Components/ProtectedRoute'
const Login = React.lazy(() => import('../Pages/Login'))
const Signup = React.lazy(() => import('../Pages/Signup'))
const ResetPassword = React.lazy(() => import('../Pages/ResetPassword'))
const CoinMarket = React.lazy(() => import('../Pages/CoinMarket'))
const News = React.lazy(() => import('../Pages/News'))
const ForgotPassword = React.lazy(() => import('../Pages/ForgotPassword'))
const CurrencyDetailsPage = React.lazy(() => import('../Pages/CurrencyDetailsPage'))
const Watchlist = React.lazy(() => import('../Pages/Watchlist'))
const Portfolio = React.lazy(() => import('../Pages/Portfolio'))
const Dashboard = React.lazy(() => import('../Pages/Dashboard'))
const UserProfile = React.lazy(() => import('../Pages/UserProfile'))
const Search = React.lazy(() => import('../Pages/Search'))
const AiPredections = React.lazy(() => import('../Pages/AiPredections'))
const Learn = React.lazy(() => import('../Pages/Learn'))
const Leaderboard = React.lazy(() => import('../Pages/Leaderboard'))
const MoreMobileNavPage = React.lazy(() => import('../Pages/MoreMobileNavPage'))
const FAQ = React.lazy(() => import('../Pages/FAQ'))
const GlobalStats = React.lazy(() => import('../Pages/GlobalStats'))
const VirtualUsdPage = React.lazy(() => import('../Pages/VirtualUsdPage'))


const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location = {location} key= {location.pathname}>
            <Route path = "/" element={<Login/>} />
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
            <Route path = "/app/coin/USD" 
            element={
                <ProtectedRoute>
                <VirtualUsdPage/>
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
            <Route path = "/app/learn" 
            element={
                <ProtectedRoute>
                <Learn/>
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
            <Route path = "/app/faq" 
            element={
                <ProtectedRoute>
                <FAQ/>
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
    </AnimatePresence>
  )
}

export default AnimatedRoutes