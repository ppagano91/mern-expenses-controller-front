import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/Home/HomePage'
import PublicNavbar from './components/Navbar/PublicNavbar'
import PrivateNavbar from './components/Navbar/PrivateNavbar'
import LoginForm from './pages/Users/Login'
import RegistrationForm from './pages/Users/Register'
import UserProfile from './pages/Users/UserProfile'
import AddCategory from './pages/Category/AddCategory'

import { useSelector } from 'react-redux'
import CategoriesList from './pages/Category/CategoriesList'
import UpdateCategory from './pages/Category/UpdateCategory'
import TransactionForm from './pages/Transactions/TransactionForm'
import Dashboard from './pages/Users/Dashboard'

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
          <Route path="/categories" element={<CategoriesList/>}/>
          <Route path="/update-category/:id" element={<UpdateCategory/>}/>
          <Route path="/add-transaction" element={<TransactionForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
