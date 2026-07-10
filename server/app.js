const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const resumeRoutes = require("./routes/resumeRoutes");

const analysisRoutes = require("./routes/analysisRoutes");


const app = express();

app.use("/api/resume", resumeRoutes);

app.use("/api/analysis", analysisRoutes);


app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

module.exports = app;