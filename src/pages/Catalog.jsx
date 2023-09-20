import { useEffect, useState } from 'react';
import { getAdverts } from '../services/advertsApi';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import Button from '../components/Button';

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
    <>
      <AdvertsList adverts={adverts} />
      <Button text={'Load more'} onClick={onLoadMoreClick} />
    </>
  );
}
