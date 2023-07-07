"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
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

  const carCards = cars.map((car, idx) => (
    <div key={idx}>
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.price}</p>
      <p>{car.description}</p>
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div className="mt-24 flex ">
        <aside className="garage--search">Search Inventory Area here</aside>
        <section className="garage--inventory">{carCards}</section>
      </div>
    </div>
  );
}
