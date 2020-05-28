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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />

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
