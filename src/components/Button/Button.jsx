import css from './Button.module.css';

export default function Button({text}) {
  return (
    <>
      <button className={css.btn}>{text}</button>
    </>
  );
}
