import { useState, useEffect, useCallback } from "react";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import { MobileMenu } from "@/components/MobileMenu/MobileMenu";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleEscKey = useCallback((e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscKey); 

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscKey); 
    };
  }, [handleEscKey]);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={styles.header}>
      <Logo />
      {!isMobile && <Navigation />}

      {isMobile && !isMobileMenuOpen && (
        <button
          className={styles.burgerMenuButton}
          onClick={openMobileMenu}
          aria-label="Open Menu"
          title="Open Burger Menu"
        >
          <IoIosMenu />
        </button>
      )}

      {isMobileMenuOpen && (
        <>
          {isMobile && (
            <>
              <button
                className={styles.closeButton}
                onClick={closeMobileMenu}
                aria-label="Close Menu"
                title="Close Menu"
              >
                <IoIosClose />
              </button>
              <MobileMenu closeMobileMenu={closeMobileMenu} />
            </>
          )}
        </>
      )}
    </header>
  );
};
