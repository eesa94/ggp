import styles from "./ContactInformation.module.scss";

const ContactInformation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.address}>
          <h2>Address</h2>
          <p>409 Bradford Road</p>
          <p>Huddersfield</p>
          <p>West Yorkshire</p>
          <p>United Kingdom</p>
          <p>HD2 2RB</p>
        </div>

        <div className={styles.contact}>
          <h2>Contact</h2>
          <a href="mailto:info@globalgp.co.uk">info@globalgp.co.uk</a>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
