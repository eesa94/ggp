import Head from "next/head";
import PageLayout from "../../components/PageLayout/PageLayout";

import Hero from "../../components/Hero/Hero";
import ViewRatesForm from "../../components/ViewRates/ViewRatesForm";

const ViewRates = () => {
  return (
    <PageLayout>
      <main>
        <Head>
          <title>GGP | View Rates</title>
          <link rel="icon" href="/images/favicon.png" />
          <link
            href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css"
            rel="stylesheet"
            type="text/css"
            media="screen"
          />
        </Head>

        <Hero image={"pylons.jpg"} darken={"0.60"} header={"View Rates"} />

        <ViewRatesForm />
      </main>
    </PageLayout>
  );
};

export default ViewRates;
