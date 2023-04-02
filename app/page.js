import Head from "next/head";
import HomeHero from "../components/Home/HeroSection";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <Navbar />
      <HomeHero />
    </div>
  );
}

export default HomePage;
