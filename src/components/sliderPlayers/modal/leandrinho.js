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
            <p>Leandrinho</p>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Leandrinho</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
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