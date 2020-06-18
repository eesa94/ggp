import styles from "./CareersInformation.module.scss";

const CareersInformation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.subSection}>
          <p>
            As one of the UK’s fastest growing Energy Consultancies we’re always
            looking for cutting edge people to join the Global Gas & Power team.
            We believe that our employees are the heart and soul of our
            business. We firmly believe that happy employees result in happy
            customers, so if you want to work somewhere that puts you first, you
            needn’t look any further.
          </p>
          <p>
            Global Gas & Power’s Director David Shaw started off working in a
            customer service role at EDF and quickly rose through the ranks of
            the business before eventually setting up a successful consultancy
            firm. Therefore, at Global Gas & Power we firmly believe that with
            dedication and hard work you can become anything that your heart
            desires, and we provide the perfect platform for you to succeed.
          </p>
        </div>

        <p>
          If you would like more information on roles available, please send
          your CV to{" "}
          <a className={styles.email} href="mailto:info@globalgp.co.uk">
            info@globalgp.co.uk
          </a>
        </p>
      </div>
    </section>
  );
};

export default CareersInformation;
