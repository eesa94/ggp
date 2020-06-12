import styles from "./ViewRatesForm.module.scss";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Checkbox from "muicss/lib/react/checkbox";

const ViewRatesForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p>
          Please leave your details below and one of our Senior Energy
          Consultants will be in touch with you within 24 hours
        </p>
        <form
          name="view rates"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="view rates" />

          <Input
            label="Business Name"
            name="Business Name"
            type="text"
            required={true}
            floatingLabel={true}
          />
          <Input
            label="Contact Name"
            name="Contact Name"
            type="text"
            required={true}
            floatingLabel={true}
          />

          <Input
            label="Email"
            name="Email"
            type="email"
            floatingLabel={true}
            required={true}
          />

          <Input
            label="Phone"
            name="Phone"
            type="number"
            floatingLabel={true}
            required={true}
          />

          <p>
            In addition to utilities, we can help you manage your indirect costs
            as well.
          </p>
          <p>
            Through a network of Associates, we can cover over 50 areas ranging
            from, mobiles, water rates, feminine hygiene, waste and
            broadband/ADSL.
          </p>
          <p>
            Click the tick box below to get details of our risk-free service
            that will deliver you savings.
          </p>

          <Checkbox name="Opt in" label="Opt in to risk-free service" />

          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ViewRatesForm;
