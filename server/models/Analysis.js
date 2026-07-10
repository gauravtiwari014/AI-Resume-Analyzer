const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },

    jobDescription: {
      type: String,
      required: true,
    },

    atsScore: Number,

    matchingSkills: [String],

    missingSkills: [String],

    strengths: [String],

    weaknesses: [String],

    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Analysis", analysisSchema);