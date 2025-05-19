import React from 'react'
import TopBar from '../components/TopBar.jsx'
import ItemsDisplay from '../components/ItemsDisplay.jsx'
import Chains from '../components/Chains.jsx'
import FirmCollections from '../components/FirmCollections.jsx'
import ProductMenu from '../components/ProductMenu.jsx'
const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="landingSection">
          <ItemsDisplay/>
          <Chains/>
          <FirmCollections/>
      </div>
    </div>
  )
}

export default LandingPage
