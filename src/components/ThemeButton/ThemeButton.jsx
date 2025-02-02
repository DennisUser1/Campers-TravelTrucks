// import Button from "@/components/Button/Button";
import { CiLight } from "react-icons/ci";
import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  return (
    <button
    className={styles.buttonTheme}
      type="button"
      aria-label={'Switch theme'}
    >
     <CiLight size={28} />
    </button>
  );
}
