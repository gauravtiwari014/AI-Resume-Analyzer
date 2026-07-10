import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "15px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload">Upload Resume</Link>
      <Link to="/analysis">Analysis</Link>
      <Link to="/history">History</Link>
      <Link to="/profile">Profile</Link>

      <button
        onClick={handleLogout}
        style={{
          marginLeft: "auto",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;