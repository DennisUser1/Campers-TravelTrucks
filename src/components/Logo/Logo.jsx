import styles from "./Logo.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/" className={styles.logo}>
      <svg className={styles.iconTruck} aria-label={'Truck icon'}>
        <use href={`${sprite}#icon-truck`} />
      </svg>
      <svg className={styles.iconLogo} aria-label={'Logo icon'}>
        <use href={`${sprite}#icon-logo`} />
      </svg>
    </NavLink>
  );
};

