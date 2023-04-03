import React from "react";

function currencyFormat(num) {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const FEATURED_CARS = [
  {
    year: 1964,
    make: "Ford",
    model: "Mustang",
    color: "Olive Green",
    price: 15000,
    mileage: 150000,
    image: "/images/mustang.avif",
  },
  {
    year: 2012,
    make: "BMW",
    model: "M4",
    color: "White",
    price: 15000,
    mileage: 1250000,
    image: "/images/bmw.avif",
  },
  {
    year: 2014,
    make: "Volkswagon",
    model: "Golf",
    color: "White",
    price: 15000,
    mileage: 100000,
    image: "/images/volkswagon.avif",
  },
];

export default function FeaturedCard() {
  return (
    <section
      id="feature-section"
      className="mx-auto py-10 mb-10 shadow-inner border-t-4 border-amber-400"
    >
      <h1 className="text-center font-bold text-4xl text-amber-400">
        FEATURED CARS
        <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
      </h1>
      <div className="flex flex-row overflow-x-auto space-x-10 lg:justify-center items-center mx-auto">
        {FEATURED_CARS.map((car, idx) => {
          return (
            <div
              key={idx}
              className="bg-stone-800 rounded p-4 shadow-xl max-w-80"
            >
              <div className="w-80">
                <div className="w-full h-full cursor-pointer">
                  <img
                    src={car.image}
                    className="object-cover object-center w-full h-48 rounded"
                  />
                </div>
                <div className="flex flex-col space-y-5 w-full">
                  <h2 className="text-2xl text-amber-400 text-center md:text-left">
                    {car.year} {car.make} {car.model}
                  </h2>
                  <p className=" text-neutral-400">Color: {car.color}</p>
                  <p className=" text-neutral-400">Mileage: {car.mileage}</p>
                  <p className=" text-2xl text-neutral-100">
                    {currencyFormat(car.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
