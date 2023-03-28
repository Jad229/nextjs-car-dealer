import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <Navbar />
      <div className="mx-auto w-full object-cover md:w-5/6">
        <img className="md:rounded-2xl" src="/images/porsche-hero.png"></img>
        <p>IDEAL CAR CORP</p>
      </div>
    </div>
  );
}

export default HomePage;
