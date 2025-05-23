import React, { useState } from "react";

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",

    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
    "Item 30",
    "Item 31",
    "Item 32",
    "Item 33",
    "Item 34",
    "Item 35",
    "Item 36",
    "Item 37",
    "Item 38",
    "Item 39",
    "Item 40",
    "Item 41",
    "Item 42",
    "Item 43",
    "Item 44",
    "Item 45",
    "Item 46",
    "Item 47",
    "Item 48",
    "Item 49",
    "Item 50",
  ];
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const goToPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const goToNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <h1>Simple Pagination</h1>
      <ul
        style={{ display: "flex", direction: "row", gap: "60px", padding: 0 }}
      >
        {currentItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        <btton
          style={{
            backgroundColor: "white",
            fontFamily: "sans-serif",
            color: "black",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            marginRight: "10px",
            fontSize: "20px",
          }}
          onClick={goToPrevious}
        >
          ⬅️ Previous
        </btton>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            fontFamily: "sans-serif",
            color: "black",
            padding: "10px 20px",
            cursor: "pointer",
            marginLeft: "10px",
            fontSize: "20px",
          }}
          onClick={goToNext}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default App;
