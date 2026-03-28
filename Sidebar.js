import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#0B1F3A",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h2>ExportIntel AI</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={{ color: "white" }}>Dashboard</Link></li>
        <li><Link to="/incentive" style={{ color: "white" }}>Incentive Tracker</Link></li>
        <li><Link to="/buyer" style={{ color: "white" }}>Buyer Finder</Link></li>
        <li><Link to="/documents" style={{ color: "white" }}>Documents</Link></li>
      </ul>
    </div>
  );
}
