import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/Home/HomePage'
import PublicNavbar from './components/Navbar/PublicNavbar'
import LoginForm from './pages/Users/Login'
import RegistrationForm from './pages/Users/Register'

function App() {


  return (
    <>
      <BrowserRouter>
        <PublicNavbar/>
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
