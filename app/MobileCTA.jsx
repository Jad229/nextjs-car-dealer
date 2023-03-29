import React from "react";

export default function MobileCTA() {
  return (
    <div className="flex justify-center md:hidden">
      <p className="text-white px-3 text-lg my-auto font-extrabold">
        Get in touch
      </p>
      <button className="w-12 h-12 rounded-full bg-amber-400"> {">"} </button>
    </div>
  );
}
