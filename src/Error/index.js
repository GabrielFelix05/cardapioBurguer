import React from 'react'
import './styles.css'
import Gif from './imgs/animation.gif'
import Back from './imgs/back.png'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='containerError'>
        <div className='containerBackButton'>
            <Link to='/'>
                <img src={Back} alt='Voltar' className='back'/>
            </Link>
        </div>
        <h1>404</h1>
        <p>Essa página não existe!</p>
        <img src={Gif} alt='Gif página 404' className='giterror'/>
        <strong>Por favor, voltar para página inicial.</strong>
    </div>
  )
}

export default Error;
