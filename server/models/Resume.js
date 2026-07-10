const mongoose =
require("mongoose");

const resumeSchema =
new mongoose.Schema({

  user: {
    type:
      mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  originalName:
  String,

  fileType:
  String,

  atsScore: {
    type: Number,
    default: 0,
  },

},
{
  timestamps:true
});

module.exports =
mongoose.model(
  "Resume",
  resumeSchema
);