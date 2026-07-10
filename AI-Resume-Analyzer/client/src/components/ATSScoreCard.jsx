import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSScoreCard({ score }) {
  return (
    <div
      style={{
        width: "220px",
        margin: "20px auto",
      }}
    >
      <CircularProgressbar
        value={score}
        text={`${score}%`}
      />

      <h2
        style={{
          textAlign: "center",
        }}
      >
        ATS Score
      </h2>
    </div>
  );
}

export default ATSScoreCard;