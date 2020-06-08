import styles from "./OurMission.module.scss";

const OurMission = () => {
  return (
    <section className={styles.section} id="our-mission">
      <div className={styles.container}>
        <h2>Our Mission</h2>
        <div className={styles.textContainer}>
          <p>
            To reduce our customers’ energy costs by using our team’s expertise,
            experience and agility in energy markets, and by capitalizing on
            market trends. That means we’re able to offer you the most
            competitive rates. But more than that, our experience in wholesale
            energy markets allows us to assess risk and manage costs, passing on
            significant savings to our customers.
          </p>
          <p>
            Global Gas & Power is focused on renewable energy that can help
            businesses switch to 100% renewable energy, we make recommendations
            on energy efficiency, and offer free advice to educate your staff
            and customers. After all, being part of the renewable energy
            movement is something to be proud of!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
