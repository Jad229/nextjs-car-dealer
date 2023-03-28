import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useState } from "react";

function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false); //initial hamburger menu state is set to false

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Ideal Car Corp | Home</title>
      </Head>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-amber-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-amber-400 font-semibold">
              Ideal Car Corp
            </span>
            <div
              id="navbar-links"
              className={`${
                isNavOpen ? "flex" : "hidden"
              } md:flex space-x-4 text-amber-400`}
              style={{ transition: "height 0.3s ease-in-out" }}
            >
              <a href="#">Garage</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto w-full object-cover md:w-5/6">
        <img className="md:rounded-2xl" src="/images/porsche-hero.png"></img>
        <p>IDEAL CAR CORP</p>
      </div>
    </div>
  );
}

export default HomePage;
