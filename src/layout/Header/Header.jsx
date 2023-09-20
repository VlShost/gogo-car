import { NavLink, useLocation } from 'react-router-dom';

import css from './Header.module.css';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

export default function Header() {
  const location = useLocation();

  function isActive(pathname) {
    return location.pathname.includes(pathname);
  }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.navLink} to="/">
          <Logo />
        </NavLink>

        <ul className={css.navList}>
          <li>
            <NavLink
              className={`${css.navLink} ${isActive('/') ? css.active : ''}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${css.navLink} ${
                isActive('/catalog') ? css.active : ''
              }`}
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${css.navLink} ${
                isActive('/favorites') ? css.active : ''
              }`}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
