import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import ContactUs from './pages/contactus/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/menuDetails/Menu'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="menu/:id" element={<Menu/>}/>
      </Routes>
    </Router>
  )
}

export default App
