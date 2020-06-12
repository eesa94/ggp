import Head from "next/head";
import PageLayout from "../../components/PageLayout/PageLayout";

import Hero from "../../components/Hero/Hero";
import ContactInformation from "../../components/Contact/ContactInformation";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  return (
    <PageLayout>
      <main>
        <Head>
          <title>GGP | Contact</title>
          <link rel="icon" href="/images/favicon.png" />
          <link
            href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css"
            rel="stylesheet"
            type="text/css"
            media="screen"
          />
        </Head>

        <Hero image={"sky.jpg"} darken={"0.55"} header={"Contact us"} />

        <ContactInformation />

        <ContactForm />
      </main>
    </PageLayout>
  );
};

export default Contact;
