const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

// connect to mongodb
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// middleware to parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// redirect routes to route handlers
app.use("/api/cars", require("./routes/carRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
