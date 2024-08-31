
import WaterConsumptionTracker from '../../components/welcomePage/WaterConsumptionTracker';
import WhyDrinkWater from '../../components/welcomePage/WhyDrinkWater';
import styles from './WelcomePage.module.css';
import { Helmet } from "react-helmet-async";
const WelcomePage = () => {
  return (
    <div className={styles.welcomeContainer}>
     <Helmet>
        <title>Welcome page</title>
      </Helmet>
      <div className={styles.backgroundElement}></div>
      <div className={styles.welcomeContent}>
        <div className={styles.trackerSection}>
          <WaterConsumptionTracker />
        </div>
        <div className={styles.whyDrinkSection}>
          <WhyDrinkWater />
        </div>
      </div>
    </div>




  );
};

export default WelcomePage;
