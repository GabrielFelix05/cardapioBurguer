import React from 'react'
import './styles.css'
import Dados from './dados/index.json'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='containerMenu'>
      <div className='contaienrButtonsDrink'>
        <Link to='/' className='snack'>Lanches</Link>
        <Link to='/bebidas' className='drink'>Bebidas</Link>
      </div>
      <div className="containerMenuDrink">
          {
            Dados.map( dado => {
              return (
                  <div className="menudrink" key={dado.id}>
                      <img src={dado.image} alt="Lanche" className='drink'/>
                      <p>{dado.name}</p>
                      <strong className='price'>{dado.price}</strong>
                  </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default Menu;
