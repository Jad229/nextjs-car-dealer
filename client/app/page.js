import Head from "next/head";
import Footer from "../components/Footer";
import FeatureSection from "../components/Home/FeatureSection";
import HomeSection from "../components/Home/HeroSection";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <Navbar />
      <HomeSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default HomePage;
