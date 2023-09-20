import React, { useState, useEffect } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';

import css from './Favorites.module.css';

export default function Favorites() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
    if (JSON.stringify(favorite) !== JSON.stringify(savedFavorites)) {
      setFavorite(savedFavorites);
    }
    // setFavorite(savedFavorites);
  }, [favorite]);

  return (
    <section className={css.container}>
      {favorite && <AdvertsList adverts={favorite} />}
    </section>
  );
}
