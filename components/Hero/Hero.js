import styles from "./Hero.module.scss";

const Hero = ({ image, darken, header }) => {
  return (
    <section className={styles.section} id="home">
      <div
        className={styles.container}
        style={{ backgroundImage: `url(/images/${image})` }}
      >
        <div
          className={styles.overlay}
          style={{ backgroundColor: `rgba(0, 0, 0, ${darken})` }}
        >
          {header && <h1 className={styles.header}>{header}</h1>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
