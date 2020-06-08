import styles from "./ContactForm.module.scss";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Input
            label="First Name"
            name="First Name"
            type="text"
            required={true}
            floatingLabel={true}
          />
          <Input
            label="Last Name"
            name="Last Name"
            type="text"
            required={true}
            floatingLabel={true}
          />

          <Input
            label="Email Address"
            name="Email Address"
            type="email"
            floatingLabel={true}
            required={true}
          />
          <Textarea
            label="Message"
            name="Message"
            floatingLabel={true}
            required={true}
          />
          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
