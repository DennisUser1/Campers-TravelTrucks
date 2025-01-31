import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={styles.link}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={styles.link}>
          Favorites
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
