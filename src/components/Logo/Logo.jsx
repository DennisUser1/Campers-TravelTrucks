import styles from "./Logo.module.css";
import sprite from "../../assets/icons/sprite.svg";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <svg className={styles.iconLogo}>
        <use href={`${sprite}#$icon-logo`} />
      </svg>
    </a>
  );
};

export default Logo;
