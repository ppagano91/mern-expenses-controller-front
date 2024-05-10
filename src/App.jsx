import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/Home/HomePage'
import PublicNavbar from './components/Navbar/PublicNavbar'
import PrivateNavbar from './components/Navbar/PrivateNavbar'
import LoginForm from './pages/Users/Login'
import RegistrationForm from './pages/Users/Register'
import AddCategory from './pages/Category/AddCategory'

import { useSelector } from 'react-redux'

function App() {

  const user = useSelector((state) => state?.auth?.user)  

  return (
    <>
      <BrowserRouter>
        {user ? <PrivateNavbar/> : <PublicNavbar/>}
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path="/add-category" element={<AddCategory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
