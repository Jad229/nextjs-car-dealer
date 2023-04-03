import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-amber-400">
      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center text-center">
        <div className="w-1/3 flex flex-col space-y-5 m-6 text-neutral-400">
          <h2 className="text-2xl text-white font-bold">Hours</h2>
          <p>Sunday: 10am - 4pm</p>
          <p>Monday-Sat: 9am - 5pm</p>
        </div>
        <div className="w-1/3 flex flex-col space-y-5 m-6 text-neutral-400">
          <h2 className="text-2xl text-white font-bold">Location</h2>
          <p>100 Firecat Lane</p>
          <p>Wizard City, WZ</p>
          <p>000000</p>
        </div>
        <div className="w-1/3 flex flex-col space-y-5 m-6 text-neutral-400">
          <h2 className="text-2xl text-white font-bold">Socials</h2>
          <div className="flex flex-row justify-center items-center space-x-5">
            <p>
              <BsInstagram size={25} />
            </p>
            <p>
              <BsTwitter size={25} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
