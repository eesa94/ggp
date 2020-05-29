import styles from "./FurtherInformation.module.scss";

const FurtherInformation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.backgroundImageContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.gridColumnOne}>
              <div className={styles.overlayTextContainer}>
                <h2 className={styles.boxHeader}>Thundercats Vexillologist</h2>
                <p>
                  Master cleanse poke pork belly vinyl, single-origin coffee DIY
                  microdosing paleo XOXO tofu tousled man bun. Kickstarter
                  jianbing food truck pabst organic poutine pork belly
                  humblebrag cornhole.
                </p>
                <p>
                  Normcore VHS single-origin coffee blue bottle, pabst four loko
                  stumptown brunch keytar shabby chic unicorn. Microdosing
                  occupy ennui cornhole. Readymade edison bulb fanny pack VHS.
                  Mixtape literally roof party tumblr, godard twee vape paleo
                  vegan raw denim cornhole chia YOLO sriracha. Chia prism
                  ethical, helvetica whatever health goth affogato.
                </p>
              </div>
            </div>
            <div className={styles.gridColumnTwo}>
              <div className={styles.overlayTextContainer}>
                <h2 className={styles.boxHeader}>Sriracha Hot Chicken</h2>
                <p>
                  Woke hexagon brunch, pitchfork pinterest yuccie bespoke jean
                  shorts tattooed leggings schlitz heirloom tote bag subway
                  tile. Tacos synth godard photo booth ennui, small batch seitan
                  disrupt.
                </p>
                <p>
                  Farm-to-table fanny pack single-origin coffee vaporware occupy
                  you probably haven't heard of them offal small batch tumblr
                  vice wayfarers.
                </p>
                <p>
                  Letterpress stumptown farm-to-table tumeric fanny pack occupy
                  yr chicharrones gastropub. Green juice wayfarers literally,
                  ethical quinoa synth squid gentrify master cleanse enamel pin
                  pour-over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherInformation;
