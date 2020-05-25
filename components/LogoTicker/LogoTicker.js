import styles from "./LogoTicker.module.css";

const LogoTicker = () => {
  return (
    <div className={styles.logosTicker}>
      <div className={styles.logosTickerFade}></div>
      <div className={styles.logosTickerContainer}>
        <div className="logosTickerOne">
          <div className={styles.logos}>
            {[...new Array(11)].map((item, index) => (
              <span key={index}>Logo {index + 1}</span>
            ))}
          </div>
        </div>
        <div className="logosTickerOne">
          <div className={styles.logos}>
            {[...new Array(11)].map((item, index) => (
              <span key={index}>Logo {index + 1}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
