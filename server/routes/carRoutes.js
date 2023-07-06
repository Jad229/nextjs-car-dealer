const express = require("express");
const router = express.Router();
const {
  getCars,
  setCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

// GET route to get cars
router.get("/", getCars);

// POST route to upload cars
router.post("/", setCar);

// PUT route to update cars
router.put("/:id", updateCar);

// DELETE route to remove cars
router.delete("/:id", deleteCar);

module.exports = router;
