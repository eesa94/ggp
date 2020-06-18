import Head from "next/head";
import PageLayout from "../../components/PageLayout/PageLayout";

import Hero from "../../components/Hero/Hero";
import CareersInformation from "../../components/Careers/CareersInformation";

const Careers = () => {
  return (
    <PageLayout>
      <main>
        <Head>
          <title>GGP | Careers</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <Hero image={"contract.jpg"} darken={"0.55"} header={"Careers"} />

        <CareersInformation />
      </main>
    </PageLayout>
  );
};

export default Careers;
