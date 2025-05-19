import React from 'react'
import LandingPage from './suby/pages/LandingPage.jsx'
import {Routes,Route} from 'react-router-dom'
import ProductMenu from './suby/components/ProductMenu.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
      </Routes>
      
    </div>
  )
}

export default App
