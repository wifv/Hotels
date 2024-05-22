import '../css/navbar.css'
import '../css/global.css'
import soccerball from '../images/soccerball.svg'

const Navbar = () => {

  return (
    <div className="container-nav">
    {/* <div className="container-nav"> */}
      <nav className="nav">
          <a className="logo" href='/'><img src={soccerball} alt="soccerball, football" /></a>
          <ul className="nav-right" id='nav-right'>
            <li className="nav-item"><a href='/about'>About</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar