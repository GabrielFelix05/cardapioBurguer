import React from 'react'
import './styles.css';
import Logo from '../../imgs/logoBasketballBurger.png'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <div className="containerHeader">
          <a href="/"> <img src={Logo} alt="Logo" className='logo'/> </a>
        </div>
    </div>
  )
}

export default Header;
