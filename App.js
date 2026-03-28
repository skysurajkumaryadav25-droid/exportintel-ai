import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Incentive from "./pages/Incentive";
import BuyerFinder from "./pages/BuyerFinder";
import Documents from "./pages/Documents";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/incentive" element={<Incentive />} />
            <Route path="/buyer" element={<BuyerFinder />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
