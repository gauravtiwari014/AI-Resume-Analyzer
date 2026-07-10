const mongoose = require("mongoose");

const jobDescriptionSchema = new mongoose.Schema(
  {
    title: String,

    company: String,

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "JobDescription",
  jobDescriptionSchema
);