import Head from "next/head";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <Navbar />
      <div className="relative mx-auto w-full object-cover md:w-5/6">
        <img
          className="invisible md:visible md:rounded-2xl"
          src="/images/porsche-hero.png"
        ></img>
        <div className="absolute top-3 md:top-32 bottom-1/2 left-1/2 -translate-x-1/2">
          <h1 className=" text-3xl text-amber-400">
            Your Ideal Car is Waiting...
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            asperiores beatae, error est ex explicabo.
          </p>
          <button
            type="button"
            className="button w-full bg-amber-400 rounded-xl p-2"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
