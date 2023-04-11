import React, { useState } from "react";
import "./styles.css";
import Jordan from '../imgs/jordan.jpg'
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
            <img src={Jordan} alt="Jordan" className='imgplayer'/>
            <p>Jordan</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Jordan</h2>
            <p>
              Michael Jordan nascido em 17 de fevereiro de 1963 é um ex-jogador de basquetebol norte-americano que atuava como meio armador. É considerado um dos maiores jogadores de todos os tempos e defendeu o time Chicago Bulls em 1984 a 1993. 
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