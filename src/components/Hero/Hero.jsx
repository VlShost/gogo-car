import css from './Hero.module.css';
import icons from '../../assets/sprite.svg';

import carHero1x from '../../assets/images/car-hero1x.png';
import carHero2x from '../../assets/images/car-hero2x.png';

export default function Hero() {
  return (
    <div className={css.heroBg}>
      <div className={css.logoWrapper}>
        <div className={css.wrapper}>
          <svg width={278} height={56}>
            <use href={icons + '#LogoBig'}></use>
          </svg>
          <h1 className={css.title}>
            Embark on unforgettable journeys with us
          </h1>
        </div>
      </div>
      <div>
        <svg className={css.locationImg} width={114} height={160}>
          <use href={icons + '#location-hero'}></use>
        </svg>
      </div>
      <picture className={css.img}>
        <source
          media="(max-width: 767px)"
          srcSet={`${carHero1x} 1x, ${carHero2x} 2x`}
        />
        <img loading="lazy" src={carHero1x} alt="Calendar" />
      </picture>
      <button className={css.learnMoreBtn}>Learn more</button>
    </div>
  );
}
