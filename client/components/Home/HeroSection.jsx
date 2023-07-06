import React from "react";
import CallToAction from "./CallToAction";

export default function HomeHero() {
  return (
    <section id="hero" className="shadow-2xl w-screen h-screen">
      <div className="bg-hero-image bg-no-repeat bg-cover bg-center brightness-50 z-0 flex flex-col justify-center h-full"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <div className="flex flex-col mx-auto space-y-10">
          <div className="flex flex-col space-y-1">
            <span className="text-5xl md:text-7xl text-center font-bold text-amber-400">
              CARS.
            </span>
            <span className="text-5xl md:text-7xl text-center font-bold text-white">
              IDEAL.
            </span>
            <span className="text-5xl md:text-7xl text-center font-bold text-amber-400">
              HERE.
            </span>
          </div>

          <hr className="w-8 h-1 mx-auto bg-white border-0 rounded"></hr>
          <p className="md:block text-lg text-center text-white">
            Your ideal car is waiting for you so whats the hold up?
          </p>
          <CallToAction />
        </div>
      </div>
    </section>
  );
}
