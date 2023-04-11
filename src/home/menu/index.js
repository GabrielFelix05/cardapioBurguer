import React from 'react'
import './styles.css'
import Dados from './dados/index.json'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='containerMenu'>
      <div className='contaienrButtons'>
        <Link to='/' className='snack'>Lanches</Link>
        <Link to='/bebidas' className='drink'>Bebidas</Link>
      </div>
      <div className="menu">
          {
            Dados.map( dado => {
              return (
                  <div className="menuSnack" key={dado.id}>
                    <div className='containerSnack'>
                      <strong>{dado.name}</strong>
                      <img src={dado.image} alt="Lanche" className='snack'/>
                    </div>
                   
                    <div className='containerDescription'>
                      <p>{dado.description}</p>
                      <strong className='price'>{dado.price}</strong>
                    </div>
                  </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default Menu;
