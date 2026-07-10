const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const dashboardRoutes =
require("./routes/dashboardRoutes");

app.use(
  "/api/dashboard",
  dashboardRoutes
);