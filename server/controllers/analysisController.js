const Resume = require("../models/Resume");
const Analysis = require("../models/Analysis");
const analyzeResume = require("../services/aiService");

exports.analyze = async (req, res) => {
  try {
    const { resumeId, jobDescription } = req.body;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    const result = await analyzeResume(
      resume.resumeText,
      jobDescription
    );

    const analysis =
await Analysis.create({

user:req.user._id,

resumeId,

jobDescription,

atsScore:result.atsScore,

matchingSkills:result.matchingSkills,

missingSkills:result.missingSkills,

strengths:result.strengths,

weaknesses:result.weaknesses,

suggestions:result.suggestions,

resumeSummary:result.resumeSummary,

coverLetter:result.coverLetter,

interviewQuestions:result.interviewQuestions,

learningRoadmap:result.learningRoadmap

});

    res.json({
      success: true,
      analysis,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAnalysis =
async (req, res) => {

const analysis =
await Analysis.findById(req.params.id);

res.json(analysis);

};