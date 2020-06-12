import styles from "./ContactInformation.module.scss";

const ContactInformation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Address</h2>
        <p>TBC</p>

        <h2>Contact</h2>
        <a href="mailto:info@globalgp.co.uk">info@globalgp.co.uk</a>
      </div>
    </section>
  );
};

export default ContactInformation;
