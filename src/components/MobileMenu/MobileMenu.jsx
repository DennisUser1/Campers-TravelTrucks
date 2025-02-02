import { createPortal } from "react-dom";
import Navigation from "@/components/Navigation/Navigation";
import ThemeButton  from '@/components/ThemeButton/ThemeButton';
import { useState } from "react";
import styles from "./MobileMenu.module.css";

const modalRoot = document.querySelector("#modal-root");

export const MobileMenu = ({ closeMobileMenu }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => closeMobileMenu(), 300);  
  };

  return createPortal(
    <div
      className={`${styles.menuBox} ${isClosing ? styles.close : styles.open}`}
    >
      <Navigation closeMobileMenu={handleClose} />
      <ThemeButton />
    </div>,
    modalRoot
  );
};
