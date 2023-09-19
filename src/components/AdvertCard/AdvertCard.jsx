import { useState } from 'react';

import css from './AdvertCard.module.css';
import Button from '../Button';
import Modal from '../Modal';

export default function AdvertsCard({ advert }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { img, make, model, year, rentalPrice } = advert;

  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={img} alt={make + model + 'Photo'} />
      </div>

      <div className={css.infoWrapper}>
        <div className={css.infoModel}>
          <p>{make}</p>
          <p className={css.model}>{model},</p>
          <p>{year}</p>
        </div>
        <div>
          <p className={css.rentalPrice}>{rentalPrice}</p>
        </div>
      </div>
      <Button text={'Learn more'} onClick={toggleModal} />
      {showModal && <Modal toggleModal={toggleModal} advert={advert} />}
    </div>
  );
}
