import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
      <section className="topBarSection">
        <div className="companyTitle">
          <Link to="/" className='link'><h2>Suby</h2></Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="userAuth">
            SignIn / SignUp
        </div>
      </section>
    </div>
  )
}

export default TopBar
