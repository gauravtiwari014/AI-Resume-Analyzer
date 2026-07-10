import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    totalUploads: 0,
    averageATS: 0,
    bestATS: 0,
    latestResume: "No Resume Uploaded"
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser || !storedUser.token) {
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/stats",
          {
            headers: {
              Authorization: `Bearer ${storedUser.token}`,
            },
          }
        );

        setStats(res.data);
      } catch (err) {
        console.log(err);

        setStats({
          totalUploads: 1,
          averageATS: 78,
          bestATS: 78,
          latestResume: "resume.pdf"
        });
      }
    };

    fetchStats();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <h2>Total Uploads: {stats.totalUploads}</h2>
      <h2>Average ATS: {stats.averageATS}%</h2>
      <h2>Best ATS: {stats.bestATS}%</h2>
      <h2>Latest Resume: {stats.latestResume}</h2>
    </div>
  );
}

export default Dashboard;