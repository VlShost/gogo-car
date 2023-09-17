import { useEffect, useState } from 'react';
import { getAdverts } from '../services/advertsApi';
import AdvertsList from '../components/AdvertsList/AdvertsList';

export default function Catalog() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then(data => {
      setAdverts(data);
    });
  }, []);

  return (
    <>
      <AdvertsList adverts={adverts} />
    </>
  );
}
