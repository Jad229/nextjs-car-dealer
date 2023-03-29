import React from "react";
import CallToAction from "./CallToAction";

export default function HomeHero() {
  return (
    <div className="shadow-2xl md:relative mx-auto w-full md:w-5/6">
      <img
        className="brightness-75 md:rounded-2xl"
        src="/images/porsche-hero.png"
      ></img>
      <div className="rounded-b-2xl md:absolute md:top-32 md:bottom-1/2 md:left-1/2 md:-translate-x-1/2">
        <div className="flex flex-col text-4xl md:text-7xl text-center font-bold text-amber-400">
          <span className="bg-white">CARS.</span>
          <span className="bg-amber-400 text-white">IDEAL.</span>
          <span className="bg-white">HERE.</span>
        </div>
        <p className="hidden md:block text-lg text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores
          beatae, error est ex explicabo.
        </p>
        <CallToAction />
      </div>
    </div>
  );
}
