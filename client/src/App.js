import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/Home'
import AboutUs from './pages/aboutus/AboutUs'
import ContactUs from './pages/contactus/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
