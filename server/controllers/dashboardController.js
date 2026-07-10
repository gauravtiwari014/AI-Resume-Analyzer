const Resume = require("../models/Resume");

const dashboardStats = async (
  req,
  res
) => {
  try {

    const resumes =
      await Resume.find({
        user: req.user._id
      });

    const totalUploads =
      resumes.length;

    const bestATS =
      resumes.length > 0
        ? Math.max(
            ...resumes.map(
              r => r.atsScore || 0
            )
          )
        : 0;

    const averageATS =
      resumes.length > 0
        ? Math.round(
            resumes.reduce(
              (sum, r) =>
                sum + (
                  r.atsScore || 0
                ),
              0
            ) / resumes.length
          )
        : 0;

    const latestResume =
      resumes.length > 0
        ? resumes[
            resumes.length - 1
          ].originalName
        : "No Resume Uploaded";

    res.json({
      totalUploads,
      bestATS,
      averageATS,
      latestResume,
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

module.exports =
  dashboardStats;