import styles from "./HomePage.module.css";
import Button from "@/components/Button/Button";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.titleMain}>
            <h1 className={styles.displayText}>Campers of your dreams</h1>
            <h2 className={styles.subtitle}>
              You can find everything you want in our catalog
            </h2>
          </div>
          <Button onClick={handleClick}>View Now</Button>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
