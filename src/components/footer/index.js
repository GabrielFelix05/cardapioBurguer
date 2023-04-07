import React from 'react'
import './styles.css';
import Logo from '../../imgs/logoBasketballBurger.png'

function Footer() {
  return (
    <div className="containerFooter">
      <a href="/"> <img src={Logo} alt="Logo" className='logoFooter'/> </a>
      <p>BasketballBurguer CNPJ: 49.190.159/0001-05 - Todos os direitos reservados 2023©.</p>
    </div>
  )
}

export default Footer;
