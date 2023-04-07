import React from 'react'
import './styles.css';
import Lebron from './modal/lebron'
import Jordan from './modal/jordan'
import TheProfessor from './modal/theprofessor'
import Leandrinho from './modal/leandrinho'
import Janeth from './modal/janeth'

function Players() {
  return (
    <div className='containerPlayers'>
      <h1>Nossas inspirações</h1>
      <div className='slider'>
        <Lebron/>
        <Jordan/>
        <Janeth/>
        <Leandrinho/>
        <TheProfessor/>
      </div>
    </div>
  );
}

export default Players;
