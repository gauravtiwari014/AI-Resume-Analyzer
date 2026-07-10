const Resume = require("../models/Resume");

exports.uploadResume = async (req, res) => {

  try {

    const resume = await Resume.create({

      user: req.user._id,

      originalName: req.file.originalname,

      fileName: req.file.filename,

      filePath: req.file.path,

      fileType: req.file.mimetype,

      fileSize: req.file.size,

    });

    res.status(201).json({

      success: true,

      resume,

    });

  } catch (err) {

    res.status(500).json({

      message: err.message,

    });

  }

};

exports.getResumes = async (req, res) => {

  const resumes = await Resume.find({
    user: req.user._id,
  });

  res.json(resumes);

};