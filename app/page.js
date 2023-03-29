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
        <div className="md:absolute md:top-32 md:bottom-1/2 md:left-1/2 md:-translate-x-1/2">
          <h1 className="text-3xl text-amber-400">
            Your Ideal Car is Waiting...
          </h1>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            asperiores beatae, error est ex explicabo.
          </p>
          <div className="flex justify-center">
            <p className="text-white px-3">Get in touch</p>
            <button
              type="button"
              className="button rounded-full bg-amber-400 p-2"
            >
              {">"}
            </button>
          </div>
          <MobileCTA />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
