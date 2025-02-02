import styles from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className="sk-grid">
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
      </div>
    </div>
  );
};
