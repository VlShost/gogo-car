import AdvertCard from '../AdvertCard';

import css from './AdvertsList.module.css';

export default function AdvertsList({ adverts }) {
  return (
    <div className={css.container}>
      {adverts && (
        <ul className={css.list}>
          {adverts.map(advert => {
            return (
              <li key={advert.id}>
                <AdvertCard advert={advert} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
