import icons from '../../assets/sprite.svg';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <div className={css.container}>
      <footer className={css.footer}>
        <svg width="29px" height="29px">
          <use href={icons + '#copyright'}></use>
        </svg>
        <a
          className={css.copyrightText}
          color="inherit"
          href="https://github.com/VlShost"
        >
          Vladyslav Shostak
        </a>
      </footer>
    </div>
  );
}
