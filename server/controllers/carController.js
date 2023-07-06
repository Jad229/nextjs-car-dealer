const getCars = (req, res) => {
  res.json({ message: "Get all cars" });
};

const setCar = (req, res) => {
  res.json({ message: "Created car" });
};
const updateCar = (req, res) => {
  res.json({ message: "Updated car" });
};

const deleteCar = (req, res) => {
  res.json({ message: "Deleted car" });
};
module.exports = {
  getCars,
  setCar,
  updateCar,
  deleteCar,
};
