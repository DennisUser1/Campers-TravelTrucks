import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleMain}>
            <h1 className={styles.displayText}>Campers of your dreams</h1>
            <h2 className={styles.subtitle}>
              You can find everything you want in our catalog
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
