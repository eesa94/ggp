import Head from "next/head";
import PageLayout from "../components/PageLayout/PageLayout";

import Hero from "../components/Hero/Hero";
import LogoTicker from "../components/LogoTicker/LogoTicker";
import OurMission from "../components/OurMission/OurMission";
import AboutUs from "../components/AboutUs/AboutUs";
import Benefits from "../components/Benefits/Benefits";
import Services from "../components/ServicesSection/Services";
import FurtherInformation from "../components/FurtherInformation/FurtherInformation";

export default function Home() {
  return (
    <PageLayout>
      <main>
        <Head>
          <title>GGP</title>
          <link rel="icon" href="/images/favicon.png" />
          <link
            href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css"
            rel="stylesheet"
            type="text/css"
            media="screen"
          />
        </Head>

        <Hero image={"earth-desktop-optimised.jpg"} />

        <LogoTicker />

        <OurMission />

        <AboutUs />

        <Benefits />

        <Services />

        <FurtherInformation />
      </main>
    </PageLayout>
  );
}
