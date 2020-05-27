import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import LogoTicker from "../components/LogoTicker/LogoTicker";
import OurMission from "../components/OurMission/OurMission";
import AboutUs from "../components/AboutUs/AboutUs";
import Benefits from "../components/Benefits/Benefits";

export default function Home() {
  return (
    <NavBar>
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
      </main>
    </NavBar>
  );
}
