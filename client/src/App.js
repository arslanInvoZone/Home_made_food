import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import Payments from './pages/payments/Payments'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/menuDetails/Menu'
import { useSelector } from 'react-redux'
import AdminHome from './admin/pages/home/AdminHome'
import Subscribers from './admin/pages/subscribers/Subscribers'
import Meals from './admin/pages/meals/Meals'
import AdminPayments from './admin/pages/payments/Payments'
function App() {
  const user = useSelector((state)=>state.userLogin)
  const {userInfo} = user
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={ userInfo && userInfo ?<AboutUs />: <Login/>} />
        <Route path="/payments" element={userInfo && userInfo?<Payments />:<Login/>} />
        <Route path="/menus/meals" element={userInfo && userInfo?<Menu/>:<Login/>}/>
        <Route path="/admin/subscribers" element={userInfo && userInfo.user.admin?<Subscribers/>:<Login/>}/>
        <Route path="/admin/meals" element={userInfo && userInfo.user.admin?<Meals/>:<Login/>}/>
        <Route path="/admin/payments" element={userInfo && userInfo.user.admin?<AdminPayments/>:<Login/>}/>
        <Route path="/admin" element={userInfo && userInfo.user.admin && <AdminHome/>} />
      </Routes>
    </Router>
  )
}

export default App
