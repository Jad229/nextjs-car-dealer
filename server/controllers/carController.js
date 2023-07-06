const Car = require("../models/carModel");

// @desc GET cars
// @route /api/cars
// @access Public
const getCars = async (req, res) => {
  const cars = await Car.find({});
  res.status(200).json(cars);
};

// @desc POST car
// @route /api/car
// @access Private
const setCar = async (req, res) => {
  // create new car from request data
  const newCar = await Car.create({
    make: req.body.make,
    model: req.body.model,
    description: req.body.description,
    year: req.body.year,
    price: req.body.price,
  });

  // Check if newCar was successfully created
  if (!newCar) {
    return res.status(400).json({ message: "Invalid car data" });
  }

  res.status(200).json(newCar);
};

// @desc PUT update car
// @route /api/car/:id
// @access Private
const updateCar = async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedCar) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.status(200).json({ car: updatedCar, message: "Updated car" });
};

// @desc DELETE car
// @route /api/car/:id
// @access Private
const deleteCar = async (req, res) => {
  const removedCar = await Car.findByIdAndRemove(req.params.id);

  if (!removedCar) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.status(200).json({ car: removedCar, message: "Removed car" });
};

module.exports = {
  getCars,
  setCar,
  updateCar,
  deleteCar,
};
