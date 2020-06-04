import Head from "next/head";
import PageLayout from "../../components/PageLayout/PageLayout";

import Hero from "../../components/Hero/Hero";

const Contact = () => {
  return (
    <PageLayout>
      <main>
        <Head>
          <title>GGP | Contact</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <Hero image={"sky-desktop-optimised.jpg"} />
      </main>
    </PageLayout>
  );
};

export default Contact;
