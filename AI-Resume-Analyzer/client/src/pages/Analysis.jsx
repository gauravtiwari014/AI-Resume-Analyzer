import React from "react";

function Analysis() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Resume Analysis</h1>

      <h3>ATS Score: 78%</h3>

      <h3>Strengths</h3>
      <ul>
        <li>Java</li>
        <li>React</li>
        <li>MongoDB</li>
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        <li>Docker</li>
        <li>AWS</li>
      </ul>
    </div>
  );
}

export default Analysis;