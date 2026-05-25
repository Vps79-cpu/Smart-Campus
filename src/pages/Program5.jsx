import { useState } from "react";

export default function Program5() {
  const [tuition, setTuition] =
    useState(50000);

  const [hostel, setHostel] =
    useState(30000);

  const [transport, setTransport] =
    useState(10000);

  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>
        Fee Calculation using Functions
      </h2>

      <input
        value={tuition}
        onChange={(e) =>
          setTuition(e.target.value)
        }
        type="number"
        placeholder="Enter Tuition Fee"
      />

      <input
        value={hostel}
        onChange={(e) =>
          setHostel(e.target.value)
        }
        type="number"
        placeholder="Enter Hostel Fee"
      />

      <input
        value={transport}
        onChange={(e) =>
          setTransport(e.target.value)
        }
        type="number"
        placeholder="Enter Transport Fee"
      />

      <div className="output-box black-text">
        <p>Tuition Fee: ₹{tuition}</p>

        <p>Hostel Fee: ₹{hostel}</p>

        <p>
          Transport Fee: ₹{transport}
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Total Fee (Tuition Only):
          ₹{Number(tuition)}
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Total Fee (Tuition + Hostel):
          ₹
          {Number(tuition) +
            Number(hostel)}
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Total Fee (Tuition + Hostel +
          Transport):
          ₹
          {Number(tuition) +
            Number(hostel) +
            Number(transport)}
        </p>
      </div>
    </div>
  );
}