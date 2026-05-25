export default function Program3() {
  const studentRecords = [
    {
      name: "Priya",
      age: 20,
      grades: [85, 90, 78],
    },
    {
      name: "Rahul",
      age: 21,
      grades: [72, 88, 91],
    },
    {
      name: "Anita",
      age: 19,
      grades: [95, 89, 92],
    },
  ];

  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>
        Student Records & Event Analysis
      </h2>

      {studentRecords.map((s, index) => (
        <div className="dark-box" key={index}>
          <p>Name: {s.name}</p>
          <p>Age: {s.age}</p>
          <p>
            Grades:
            {s.grades.join(", ")}
          </p>
        </div>
      ))}

      <div className="output-box black-text">
        <p>
          Common Participants:
          Rahul, Anita
        </p>

        <p>
          All Participants:
          Priya, Rahul, Anita,
          Kiran, Sneha
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Participants only in Event A:
          Priya, Kiran
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Participants only in Event B:
          Sneha
        </p>
      </div>
    </div>
  );
}