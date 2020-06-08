import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <h2>Services</h2>
        <div className={styles.textContainer}>
          <p>
            Choosing a gas/electricity supplier for your business can be taxing
            and time consuming. If running a small, medium or corporate sized
            business, you can possibly slash down your gas and power expenditure
            by switching tariffs or providers. But unlike domestic energy,
            tariffs are customized and can have huge variations. So, the idea
            behind finding the most suitable business electricity is shopping
            around.
          </p>

          <p>
            Global Gas & Power allow 30+ direct energy suppliers to directly bid
            to win your business, therefore ensuring you get their rock bottom
            prices. The challenge will however set in when it comes to comparing
            plans. Global Gas & Power certified energy consultants have over 25
            years’ experience and will offer sound professional advice in which
            tariff best suits your business.
          </p>

          <img src="/images/logo.png" alt="ggp logo" className={styles.logo} />
        </div>
      </div>
    </section>
  );
};

export default Services;
