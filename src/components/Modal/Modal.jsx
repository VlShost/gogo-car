import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import splitAddress from '../../utils/addressSplitter';

import icons from '../../assets/sprite.svg';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ advert, toggleModal }) {
  const {
    address,
    img,
    id,
    year,
    make,
    model,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = advert;

  const addressDetails = splitAddress(address);

  const conditionsArr = rentalConditions.split('\n');
  const minAgeArray = conditionsArr[0].split(': ');
  const rentalPriceArr = rentalPrice.split('$');
  const formattedMileage = mileage.toLocaleString('en-US');

  const phoneNumber = `tel:+380730000000`;

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
        <img className={css.img} src={img} alt="alt" />

        <button className={css.closeBtn} onClick={toggleModal}>
          <svg width={24} height={24}>
            <use href={icons + '#cross'}></use>
          </svg>
        </button>

        <h2 className={css.title}>
          {make} <span className={css.accent}>{model}</span>, {year}
        </h2>
        <div className={css.tagsWrapper}>
          <ul className={css.list}>
            <li>{addressDetails.city}</li>
            <li>{addressDetails.country}</li>
            <li>Id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {type}</li>
          </ul>
          <ul className={css.list}>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>
        </div>
        <p className={css.description}>{description}</p>
        <h3 className={css.subTitle}>Accessories and functionalities:</h3>
        <div className={css.tagsWrapper}>
          <ul className={css.list}>
            {accessories.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <ul className={css.list}>
            {functionalities.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <h3 className={css.subTitle}>Rental Conditions: </h3>
        <ul className={css.rentalConditionsList}>
          <li>
            Minimum age: <span>{minAgeArray[1]}</span>
          </li>
          <li>{conditionsArr[1]}</li>
          <li>{conditionsArr[2]}</li>
          <li>
            Mileage: <span>{formattedMileage}</span>
          </li>
          <li>
            Price: <span>{rentalPriceArr}$</span>
          </li>
        </ul>
        <Link className={css.callBtn} to={phoneNumber}>
          Rental car
        </Link>
      </div>
    </div>,
    modalRoot
  );
}
