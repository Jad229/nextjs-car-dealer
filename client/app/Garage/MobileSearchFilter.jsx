import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function MobileSearchFilter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }
  return (
    <div className="w-full">
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
            <div className="form-group space-x-10">
              <label className="font-semibold" htmlFor="year">
                YEAR
              </label>
              <input type="number" name="year" id="year" placeholder="Year" />
            </div>
            <div className="form-group space-x-10">
              <label className="font-semibold" htmlFor="make">
                MAKE
              </label>
              <input type="text" name="make" id="make" placeholder="Make" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
