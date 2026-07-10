import React from "react";

function History() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Analysis History</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resume</th>
            <th>ATS Score</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>09-07-2026</td>
            <td>resume.pdf</td>
            <td>78%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;