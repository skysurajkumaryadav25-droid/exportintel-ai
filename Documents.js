export default function Documents() {
  const docs = [
    "IEC Code",
    "Invoice",
    "Packing List",
    "Bill of Lading"
  ];

  return (
    <div>
      <h2>Document Checklist</h2>
      {docs.map((doc, i) => (
        <div key={i}>
          <input type="checkbox" /> {doc}
        </div>
      ))}
    </div>
  );
}
