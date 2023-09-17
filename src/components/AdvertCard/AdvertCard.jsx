import css from './AdvertCard.module.css';

export default function AdvertsCard({ advert }) {
  return (
    <div className={css.container}>
      <img src={advert.img} alt={advert.make + advert.model + 'Photo'} />
      <p>{advert.make}</p>
      <p>{advert.model}</p>
      <p>{advert.year}</p>
      <p>{advert.rentalPrice}</p>
      <button>Learn more</button>
    </div>
  );
}
