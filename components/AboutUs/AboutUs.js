import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.gridColumnOne}>
              <div className={styles.overlayTextContainer}>som txt here</div>
            </div>
            <div>col 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
