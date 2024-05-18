import { useState } from 'react'
import '../css/navbar.css'
import '../css/global.css'
import Theme from './Theme'

const Navbar = ({setTheme}: any, {dark}: any) => {

  return (
    <div className={dark ? "dark container-nav" : "light container-nav"}>
    {/* <div className="container-nav"> */}
      <nav className="nav">
          <a className="logo" href='/'>Davlet kak dela</a>
          <ul className="nav-right" id='nav-right'>
            <li className="nav-item"><a href='/about'>About</a></li>
            <Theme setTheme={setTheme} dark={dark}/>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar