import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';

import splitAddress from '../../utils/addressSplitter';

import icons from '../../assets/sprite.svg';
import css from './AdvertCard.module.css';

export default function AdvertsCard({ advert }) {
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
    return savedFavorites;
  });

  const isFavorite = favorite.some(favorite => favorite.id === advert.id);

  const toggleFavorite = () => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];

      const isFavorite = savedFavorites.some(
        favorite => favorite.id === advert.id
      );

      let updatedFavorites;

      if (isFavorite) {
        updatedFavorites = savedFavorites.filter(
          favorite => favorite.id !== advert.id
        );
      } else {
        updatedFavorites = [...savedFavorites, advert];
      }

      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));

      setFavorite(updatedFavorites);
    } catch (error) {
      console.log(error.message);
    }
  };

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

      <button className={css.likeBtn} onClick={toggleFavorite}>
        {isFavorite ? (
          <svg width={18} height={18}>
            <use href={icons + '#active'}></use>
          </svg>
        ) : (
          <svg width={18} height={18}>
            <use href={icons + '#heart'}></use>
          </svg>
        )}
      </button>

      <div className={css.titleWrapper}>
        <div className={css.titleModel}>
          {make}
          {make.length <= 5 && (
            <span className={css.model}> {model}</span>
          )}, {year}
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
