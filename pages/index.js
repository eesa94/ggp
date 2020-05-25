import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import LogoTicker from "../components/LogoTicker/LogoTicker";

export default function Home() {
  return (
    <NavBar>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />

        <LogoTicker />
      </div>
    </NavBar>
  );
}
