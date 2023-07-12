"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); //initial hamburger menu state is set to false

  return (
    <nav className="fixed w-full top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-amber-400">
      <div className="flex items-center justify-between px-10 h-16">
        <span className="text-2xl text-amber-400 font-bold">
          <Link href="/">IDEAL CAR CORP</Link>
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
    </nav>
  );
}
export default Navbar;
