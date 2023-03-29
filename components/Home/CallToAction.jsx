import React from "react";

export default function CallToAction() {
  return (
    <div className="my-3 flex justify-center">
      <button
        class="text-amber-500 border border-amber-400 hover:bg-amber-400 hover:text-white active:bg-amber-400 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Get in touch
      </button>
    </div>
  );
}
