import { useEffect, useState } from 'react';
import { getAdverts } from '../../services/advertsApi';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
// import Button from '../../components/Button';

import css from './Catalog.module.css';

export default function Catalog() {
  const [adverts, setAdverts] = useState([]);
  const [page, SetPage] = useState(1);

  useEffect(() => {
    getAdverts(page).then(newData => {
      setAdverts(prevData => [...prevData, ...newData]);
    });
  }, [page]);

  const onLoadMoreClick = () => {
    SetPage(prevPage => prevPage + 1);
  };

  return (
    <section className={css.container}>
      <AdvertsList adverts={adverts} />
      <button className={css.loadMoreBtn} onClick={onLoadMoreClick}>
        Load more
      </button>
    </section>
  );
}
