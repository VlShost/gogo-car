import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ advert, toggleModal }) {
  // const handleBackdropClick = e => {
  //   if (e.currentTarget === e.target) {
  //     toggleModal();
  //   }
  // };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <>
      <div>
        <img src={advert.img} alt="alt" />
      </div>
    </>,
    modalRoot
  );
}
