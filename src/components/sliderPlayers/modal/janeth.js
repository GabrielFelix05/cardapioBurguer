import React, { useState } from "react";
import "./styles.css";
import Janeth from '../imgs/janeth.png'
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
            <img src={Janeth} alt="Janeth" className='imgplayer'/>
            <p>Janeth</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Janeth</h2>
            <p>
              Janeth dos Santos Arcain nascida em 11 de abril de 1969 é uma ex-jogadora brasileira de basquetebol.<br/>
              Atuava como ala-armadora e foi uma das expoentes da Seleção, sendo campeã mundial em 1994 e vencedora de duas medalhas olímpicas.<br/>
              Janeth é a terceira maior pontuadora da história da Seleção, tendo anotado 2.247 pontos em 138 jogos oficiais, média de 16,3 pontos por jogo.
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