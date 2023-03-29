import Head from "next/head";
import Navbar from "../components/Navbar";
import MobileCTA from "./MobileCTA";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <Navbar />
      <div className="shadow-2xl md:relative mx-auto w-full md:w-5/6">
        <img className="md:rounded-2xl" src="/images/porsche-hero.png"></img>
        <div className="rounded-b-2xl md:absolute md:top-32 md:bottom-1/2 md:left-1/2 md:-translate-x-1/2">
          <div className="flex flex-col text-center text-4xl font-bold text-amber-400">
            <span>CARS.</span>
            <span>IDEAL.</span>
            <span>HERE.</span>
          </div>
          <p className="hidden md:block text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            asperiores beatae, error est ex explicabo.
          </p>
          <MobileCTA />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
