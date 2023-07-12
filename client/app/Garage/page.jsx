"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";
import Navbar from "../../components/Navbar";
import MobileSearchFilter from "./MobileSearchFilter";
export default function Garage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, []);

  const carCards = cars.map((car, idx) => <CarCard key={idx} car={car} />);

  return (
    <div>
      <Navbar />
      <div className="mt-24 flex flex-col lg:flex-row p-4">
        <MobileSearchFilter />
        <div className="hidden w-80 max-h-96 rounded lg:flex flex-col space-y-10 pt-20 bg-neutral-300">
          <h3 className="font-bold text-center text-2xl">SEARCH FILTER</h3>
          <form className="p-4 mx-auto space-y-10">
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
        <section className="w-full flex flex-wrap flex-col md:flex-row justify-evenly items-center p-6 space-y-4 ">
          {carCards}
        </section>
      </div>
    </div>
  );
}
