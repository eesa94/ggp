import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.section} id="about-us">
      <div className={styles.container}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.gridColumnOne}>
              <div className={styles.overlayTextContainer}>
                <h2>About us</h2>
                <p>
                  What differentiates Global Gas & Power is the personal service
                  we offer businesses, and the level of sophisticated analysis
                  and the keen understanding of the energy markets that a
                  wholesale consulting firm our size brings to the table.
                </p>
                <p>
                  Global Gas & Power take a hands-on approach and customize
                  plans for each individual client and company we work with.
                  We’re able to manage your budget with a fixed rate. All of
                  this adds up to significant savings for our customers and
                  makes it easy to understand why so many businesses choose us –
                  and why our customer retention levels are measurably higher
                  than other consulting firms.
                </p>
                <p>
                  At Global Gas & Power, we have a platform that enables 30+
                  direct energy suppliers to all bid against each other, what
                  this does is ensure we can get you the most aggressive rate in
                  any market condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
