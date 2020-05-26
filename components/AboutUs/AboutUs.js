import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.gridColumnOne}>
              <div className={styles.overlayTextContainer}>
                <h2>
                  Subway tile fingerstache authentic, kombucha humblebrag ugh
                  franzen twee yr lyft
                </h2>
                <p>
                  Master cleanse poke pork belly vinyl, single-origin coffee DIY
                  microdosing paleo XOXO tofu tousled man bun. Kickstarter
                  jianbing food truck pabst organic poutine pork belly
                  humblebrag cornhole.
                </p>
                <p>
                  Normcore VHS single-origin coffee blue bottle, pabst four loko
                  stumptown brunch keytar shabby chic unicorn. Microdosing
                  occupy ennui cornhole
                </p>
                <button className={styles.button}>Take Me Somewhere</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
