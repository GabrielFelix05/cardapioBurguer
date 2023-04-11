import React, { useState } from "react";
import "./styles.css";
import Theprofessor from '../imgs/theProfessor.jpg'
import Close from '../imgs/close.png'

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

        <div className='Player' onClick={toggleModal}>
            <img src={Theprofessor} alt="The professor" className='imgplayer'/>
            <p>The Professor</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>The Professor</h2>
            <p>
              The Professor é jogador americano de basquetebol de rua conhecido pelo seu jogo no circuito internacional AND1 Mixtape Tour. As suas capacidades levaram a aparecer em anúncios publicitários, bem como em filmes mainstream como Semi-Pro e Ball Don't Lie.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              <img src={Close} alt="Fechar" className='imgClose'/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}