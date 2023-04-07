import React from 'react'
import './styles.css'
import Dados from './dados/index.json'

function Menu() {
  return (
    <div className='containerMenu'>
      <h1>Laches:</h1>
      <div className="menu">
          {
            Dados.map( dado => {
              return (
                  <div className="menu" key={dado.id}>
                    <img src={dado.image} alt="Lanche" className='snack'/>
                    <strong>{dado.name}</strong>
                    <p>{dado.description}</p>
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
