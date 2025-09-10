import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const products = ["Steel Table", "Iron Gate", "Metal Shelf", "Venturi Tube"];

  const filtered = products.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <ul>
        {filtered.length > 0 ? (
          filtered.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}
