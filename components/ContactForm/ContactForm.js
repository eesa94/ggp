import styles from "./ContactForm.module.scss";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formGroup}>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send</button>
          </div>
        </form> */}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <legend>Contact us</legend>

          <Input
            label="First Name"
            type="text"
            required={true}
            floatingLabel={true}
          />
          <Input
            label="Last Name"
            type="text"
            required={true}
            floatingLabel={true}
          />

          <Input
            label="Email Address"
            type="email"
            floatingLabel={true}
            required={true}
          />
          <Textarea
            label="Required Textarea"
            floatingLabel={true}
            required={true}
          />
          <Button variant="raised">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
