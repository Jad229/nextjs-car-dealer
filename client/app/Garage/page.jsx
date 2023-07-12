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
      <div className="mt-24 flex-column p-4">
        <MobileSearchFilter />
        <section className="garage--inventory">{carCards}</section>
      </div>
    </div>
  );
}
