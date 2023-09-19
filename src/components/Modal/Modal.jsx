import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Button';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ advert, toggleModal }) {
  console.log(advert);

  const tags = [
    `${advert.address}`,
    `Id: ${advert.id}`,
    `Year: ${advert.year}`,
    `Type: ${advert.type}`,
    `Fuel Consumption: ${advert.fuelConsumption}`,
    `Engine Size: ${advert.engineSize}`,
  ].join(' | ');

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  const clickEsc = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', clickEsc);
    return () => {
      window.addEventListener('keydown', clickEsc);
    };
  });

  return createPortal(
    <div className={css.backdrop} onClick={clickBackdrop}>
      <div className={css.modalWindow}>
        <img className={css.img} src={advert.img} alt="alt" />
        <div className={css.tagsWrapper}>
          <p className={css.tags}>{tags}</p>
          {/* <p>{advert.address}</p>
          <p>Id: {advert.id}</p>
          <p>Year: {advert.year}</p>
          <p>Type: {advert.type}</p>
          <p>Fuel Consumption: {advert.fuelConsumption}</p>
          <p>Engine Size: {advert.engineSize}</p> */}
        </div>
        <p>{advert.description}</p>
        <Button text={'Rental car'} />
      </div>
    </div>,
    modalRoot
  );
}
