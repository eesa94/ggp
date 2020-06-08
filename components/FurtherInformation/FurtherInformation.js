import styles from "./FurtherInformation.module.scss";
import Button from "muicss/lib/react/button";
import Link from "next/link";

const FurtherInformation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.gridColumn}>
              <div className={styles.overlayTextContainer}>
                <h2 className={styles.boxHeader}>Contact us</h2>
                <p>
                  Have a question? Get in touch using our contact form and we
                  will be glad to answer any queries you may have.
                </p>
                <Link href="/contact">
                  <a>
                    <Button className={styles.button}>Contact us</Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.gridColumn}>
              <div className={styles.overlayTextContainer}>
                <h2 className={styles.boxHeader}>View rates</h2>
                <p>
                  To see our rates, please provide your contact details and a
                  Senior Energy Consultant will be in touch with you within 24
                  hours.
                </p>
                <Link href="/view-rates">
                  <a>
                    <Button className={styles.button}>View rates</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherInformation;
