"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useEffect, useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); //initial hamburger menu state is set to false

  return (
    <div className="mb-10">
      <nav className="fixed w-full top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-amber-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-amber-400 font-semibold">
              IDEAL CAR CORP
            </span>
            <div
              id="navbar-links"
              className={`${
                isNavOpen ? "flex" : "hidden"
              } lg:flex space-x-4 text-amber-400`}
              style={{ transition: "height 0.3s ease-in-out" }}
            >
              <Link href="/Garage">Garage</Link>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
