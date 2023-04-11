import React, { useState } from "react";
import "./styles.css";
import Lebron from '../imgs/lebronJames.jpg'
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
            <img src={Lebron} alt="Lebron" className='imgplayer'/>
            <p>Lebron</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Lebron</h2>
            <p>
              LeBron James é um dos melhores jogadores da história do basquete. Nascido em 30 de dezembro de 1984, em Akron, no estado de Ohio, nos Estados Unidos, ele iniciou sua trajetória na NBA em 2003, no Cleveland Cavaliers. Passou também pelo Miami Heat e, atualmente, defende o Los Angeles Lakers.
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