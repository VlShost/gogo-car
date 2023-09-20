import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';

import splitAddress from '../../utils/addressSplitter';

import css from './AdvertCard.module.css';

export default function AdvertsCard({ advert }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    address,
    img,
    id,
    year,
    make,
    model,
    type,
    functionalities,
    rentalCompany,
    rentalPrice,
  } = advert;

  const addressDetails = splitAddress(address);

  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={img} alt={make + model + 'Photo'} />
      </div>

      <div className={css.titleWrapper}>
        <div className={css.titleModel}>
          <p>{make}</p>
          <p className={css.model}>{model},</p>
          <p>{year}</p>
        </div>
        <div>
          <p className={css.rentalPrice}>{rentalPrice}</p>
        </div>
      </div>

      <div className={css.tagsWrapper}>
        <ul className={css.list}>
          <li>{addressDetails.city}</li>
          <li>{addressDetails.country}</li>
          <li>{rentalCompany}</li>
        </ul>
        <ul className={css.list}>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{functionalities[0]}</li>
        </ul>
      </div>

      <Button text={'Learn more'} onClick={toggleModal} />
      {showModal && <Modal toggleModal={toggleModal} advert={advert} />}
    </div>
  );
}
