const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/opportunities", (req, res) => {
  res.json([
    { hs: "100630", product: "Basmati Rice", margin: "18%" },
    { hs: "090240", product: "Tea", margin: "22%" },
    { hs: "300490", product: "Pharmaceuticals", margin: "30%" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
