import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <NavLink className={css.navLink} to="/">
          <Logo />
        </NavLink>

        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
