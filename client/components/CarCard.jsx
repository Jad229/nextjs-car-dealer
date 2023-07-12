export default function CarCard({ car }) {
  return (
    <div className="bg-stone-800 rounded p-4 shadow-xl w-80">
      <div className="mx-auto">
        <div className="w-full h-full cursor-pointer">
          <img
            src={car?.image}
            className="object-cover object-center w-full h-48 rounded"
          />
        </div>
        <div className="flex flex-col space-y-5 w-full">
          <h2 className="text-2xl text-amber-400 text-center md:text-left">
            {car.year} {car.make} {car.model}
          </h2>
          <p className=" text-neutral-400">Color: {car?.color}</p>
          <p className=" text-neutral-400">Mileage: {car?.mileage}</p>
          <p className=" text-2xl text-neutral-100">{`$ ${car.price}`}</p>
        </div>
      </div>
    </div>
  );
}
