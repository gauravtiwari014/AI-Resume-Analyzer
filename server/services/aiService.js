const analyzeResume = async (resumeText) => {
    return {
        atsScore: 78,
        strengths: [
            "Java",
            "React",
            "MongoDB"
        ],
        missingSkills: [
            "Docker",
            "AWS",
            "CI/CD"
        ],
        suggestions: [
            "Add projects section",
            "Add quantified achievements"
        ]
    };
};

module.exports = {
    analyzeResume
};