import { createPortal } from "react-dom";
import Navigation from "@/Navigation/Navigation";
import styles from "./MobileMenu.module.css";

const modalRoot = document.querySelector("#modal-root");

export const MobileMenu = ({ closeMobileMenu }) => {
  return createPortal(
    <div className={styles.menuBox}>
      <Navigation closeMobileMenu={closeMobileMenu} />
    </div>,
    modalRoot
  );
};
