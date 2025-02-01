import styles from "./Logo.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <svg className={styles.iconLogo} aria-label={'Logo icon'}>
        <use href={`${sprite}#$icon-logo`} />
      </svg>
    </Link>
  );
};

