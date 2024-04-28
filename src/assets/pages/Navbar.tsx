import { useState } from 'react'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className="container-nav">
      <nav className="nav">
          <a className="logo" href='/'>My Portfolio</a>
          <ul className={ "nav-right"} id='nav-right'>
              <li className="nav-item"><a href='/about'>About</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar