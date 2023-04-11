import React, { useState } from "react";
import "./styles.css";
import Leandrinho from '../imgs/leandrinho.jpg'
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
            <img src={Leandrinho} alt="Leandrinho" className='imgplayer'/>
            <p>Leandrinho</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Leandrinho</h2>
            <p>
              Leadrinho nascido em 28 de novembro de 1982 iniciou sua carreira no Palmeiras em 1999 e depois passou pelo Bauru, entre 2001 e 2003, quando trocou o basquete brasileiro pelo norte-americano. Na NBA, o ala-armador se destacou no Phoenix Suns, tendo sido eleito melhor sexto homem da temporada 2006/07.
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