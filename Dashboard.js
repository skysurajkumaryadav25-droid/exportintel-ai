import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/opportunities")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>Profit Opportunity</h2>

      <table border="1" width="100%">
        <thead style={{ background: "#0B1F3A", color: "white" }}>
          <tr>
            <th>HS Code</th>
            <th>Product</th>
            <th>Margin</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.hs}</td>
              <td>{item.product}</td>
              <td>{item.margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
