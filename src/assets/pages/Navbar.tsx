// import { useState } from 'react'
import '../css/navbar.css'
// import theme from '../theme.svg'

const Navbar = () => {
  // const [dark, setDark] = useState(false)

  return (
    // <div className={dark ? "dark container-nav" : "light container-nav"}>
    <div className="container-nav">
      <nav className="nav">
          <a className="logo" href='/'>Davlet kak dela</a>
          <ul className="nav-right" id='nav-right'>
            <li className="nav-item"><a href='/about'>About</a></li>
            {/* <img src={theme} alt="theme" className="nav-item theme" onClick={setDark(!dark)}/> */}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar