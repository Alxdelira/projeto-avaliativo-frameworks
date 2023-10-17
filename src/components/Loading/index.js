import style from './style.module.css';

export default function Loading() {

  return (
    <div className={style.loading_container}>
      <div className={style.spinner}></div>
    </div>
  );
}