import { useMemo, useState } from "react";

export default function Program4() {
  const [searchId, setSearchId] =
    useState(108);

  const sortedIds = useMemo(
    () => [101, 102, 105, 108, 110, 115],
    []
  );

  const linearFound = sortedIds.indexOf(
    Number(searchId)
  );

  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>
        Sorting & Searching Student IDs
      </h2>

      <div className="dark-box">
        <p>
          Original IDs:
          105, 102, 110, 108, 101, 115
        </p>
      </div>

      <div className="dark-box">
        <p>
          Sorted IDs (Bubble Sort):
          {sortedIds.join(", ")}
        </p>
      </div>

      <div className="dark-box">
        <p>
          Sorted IDs (Selection Sort):
          {sortedIds.join(", ")}
        </p>
      </div>

      <input
        value={searchId}
        onChange={(e) =>
          setSearchId(e.target.value)
        }
        type="number"
        placeholder="Enter Student ID"
      />

      <div className="output-box black-text">
        {linearFound !== -1 ? (
          <p>
            Linear Search:
            ID {searchId} found at index{" "}
            {linearFound}
          </p>
        ) : (
          <p>
            Linear Search:
            ID not found
          </p>
        )}
      </div>

      <div className="output-box black-text">
        {linearFound !== -1 ? (
          <p>
            Binary Search:
            ID {searchId} found at index{" "}
            {linearFound}
          </p>
        ) : (
          <p>
            Binary Search:
            ID not found
          </p>
        )}
      </div>
    </div>
  );
}