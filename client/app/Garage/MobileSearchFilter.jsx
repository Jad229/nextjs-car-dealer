import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function MobileSearchFilter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }
  return (
    <div className="w-full lg:hidden">
      <button onClick={toggleMenu} className="p-4 w-full bg-white font-bold">
        Filter
      </button>
      {isMenuOpen && (
        <div className="flex-col space-y-10 pt-20 fixed top-0 left-0 w-screen h-screen bg-white">
          <button className="px-6" onClick={toggleMenu}>
            <FaChevronLeft size={25} />
          </button>

          <h3 className="font-bold text-center text-2xl">SEARCH</h3>
          <form className="w-2/3 mx-auto space-y-10">
            <div className="form-group">
              <label
                className="block mb-2 text-sm font-semibold text-gray-900"
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form-group ">
              <label
                className="block mb-2 text-sm font-semibold text-gray-900"
                htmlFor="make"
              >
                MAKE
              </label>
              <input
                type="text"
                name="make"
                id="make"
                placeholder="Make"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
