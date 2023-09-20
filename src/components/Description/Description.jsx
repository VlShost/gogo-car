import css from './Description.module.css';
import icons from '../../assets/sprite.svg';
import { NavLink } from 'react-router-dom';

export default function Description() {
  return (
    <div className={css.container}>
      <h2 className={css.subTitle}>Turn your travel dreams into reality</h2>
      <p className={css.info}>
        Whether you’re yearning for a relaxing beach getaway, an exhilarating
        adventure in the mountains or an immersive cultural exploration
      </p>

      <div className={css.steps}>
        <div className={css.wrapper}>
          <svg width={80} height={80}>
            <use href={icons + '#car-vector'}></use>
          </svg>
          <p className={css.stepText}>Choose a car</p>
        </div>

        <svg width={225} height={83}>
          <use href={icons + '#pathDesk'}></use>
        </svg>

        <div className={css.wrapper}>
          <svg width={80} height={80}>
            <use href={icons + '#calendar'}></use>
          </svg>
          <p className={css.stepText}>Pick up date</p>
        </div>

        <svg width={225} height={83}>
          <use href={icons + '#pathDesk'}></use>
        </svg>

        <div className={css.wrapper}>
          <svg width={80} height={80}>
            <use href={icons + '#key'}></use>
          </svg>
          <p className={css.stepText}>Book your car</p>
        </div>
      </div>
      <NavLink className={css.catalogLink} to="/catalog">
        Open Full Catalog
      </NavLink>
    </div>
  );
}
