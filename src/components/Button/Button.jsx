import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({
  children,
  primary = true,
  onClick,
  ...otherProps
}) {
  const buttonClass = primary ? styles.primary : styles.secondary;

  return (
    <button
      className={clsx(styles.button, buttonClass, 'preventSelect')}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
