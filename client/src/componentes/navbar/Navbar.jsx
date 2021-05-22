import { Button } from '../several/Button'
import React , { useState, useEffect } from 'react'
import { Link }from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
   
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton)
  return (
   <>
    <nav className="navbar">
      <div className="navbar-container">
        <div to="/" className="navbar-logo">
          CM
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className="nav-item">
            <div to="/" className='nav-links' onClick={closeMobileMenu}>Home</div>
          </li>
          <li className="nav-item">
            <div to="/" className='nav-links' onClick={closeMobileMenu}>Ciencia</div>
          </li>
          <li className="nav-item">
            <div to="/" className='nav-links' onClick={closeMobileMenu}>Desporto</div>
          </li>
          <li className="nav-item">
            <div to="/" className='nav-links' onClick={closeMobileMenu}>Humanidade</div>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Entrar</Button>}
      </div>
    </nav>
   </>
  )
}

export default Navbar