import { useEffect, useState } from "react";

import axios from "axios";

import ATSScoreCard from "../components/ATSScoreCard";

import SkillsCard from "../components/SkillsCard";

import StrengthCard from "../components/StrengthCard";

import SuggestionCard from "../components/SuggestionCard";

function Analysis() {
  const [analysis, setAnalysis] =
    useState(null);

  useEffect(() => {
    const load = async () => {
      const token = JSON.parse(
        localStorage.getItem("user")
      ).token;

      const id =
        localStorage.getItem("analysisId");

      const res = await axios.get(
        `http://localhost:5000/api/analysis/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalysis(res.data);
    };

    load();
  }, []);

  if (!analysis) return <h2>Loading...</h2>;

  return (
    <div>

      <ATSScoreCard
        score={analysis.atsScore}
      />

      <SkillsCard
        title="Matching Skills"
        skills={analysis.matchingSkills}
      />

      <SkillsCard
        title="Missing Skills"
        skills={analysis.missingSkills}
      />

      <StrengthCard
        title="Strengths"
        items={analysis.strengths}
      />

      <StrengthCard
        title="Weaknesses"
        items={analysis.weaknesses}
      />

      <SuggestionCard
        suggestions={
          analysis.suggestions
        }
      />

    </div>
  );
}

export default Analysis;