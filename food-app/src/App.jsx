import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/pages/Home/Home'
import Cart from './Component/pages/Cart/Cart'
import PlaceOrder from './Component/pages/PlaceOrder/PlaceOrder'
import Footer from './Component/Footer/Footer'
import Loginpopup from './Component/Loginpop/Loginpopup'
import Verify from './Component/pages/verify/Verify'
import Myorder from './Component/pages/my order/Myorder'
import About from './Component/multipages/About'
import Conditions from './Component/multipages/Conditions'
import Policy from './Component/multipages/Policy'
import Return from './Component/multipages/Return'
import Service from './Component/multipages/Service'
import { ToastContainer } from "react-toastify";
import Contact from './Component/multipages/Contact'
import Disable from './Component/Disable'



const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorder' element={<Myorder />} />
          <Route path='/about' element={<About/>} />
          <Route path='/conditions' element={<Conditions/>} />
          <Route path='/policy' element={<Policy/>} />
          <Route path='/return' element={<Return/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />

          
          
          
          </Routes>
          <ToastContainer/>
          <Disable/>

      </div>
      
      <Footer />
    </>
  )
}

export default App
