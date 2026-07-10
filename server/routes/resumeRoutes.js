const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");


const {
  uploadResume,
  getResumes,
  getResumeById,
} = require("../controllers/resumeController");

// router.get("/:id", protect, getResumeById);

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

router.get("/", protect, getResumes);

module.exports = router;