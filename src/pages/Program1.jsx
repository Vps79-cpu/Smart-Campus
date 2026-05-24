import { useState } from "react";

function gradeFromScore(score) {
  if (score >= 90)
    return { grade: "A", remark: "Excellent" };

  if (score >= 75)
    return { grade: "B", remark: "Very Good" };

  if (score >= 60)
    return { grade: "C", remark: "Good" };

  if (score >= 40)
    return { grade: "D", remark: "Average" };

  return {
    grade: "F",
    remark: "Needs Improvement",
  };
}

export default function Program1() {
  const [name, setName] = useState("Priya");
  const [score, setScore] = useState(82);

  const result = gradeFromScore(Number(score));

  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>Grade Evaluator</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        value={score}
        onChange={(e) => setScore(e.target.value)}
        type="number"
        placeholder="Enter Score"
      />

      <div className="output-box black-text">
        <p>Name: {name}</p>
        <p>Score: {score}</p>
        <p>Grade: {result.grade}</p>
        <p>Remark: {result.remark}</p>
      </div>

      <div
        className="rules-box"
        style={{
          background: "#d1d5db",
          padding: "20px",
          borderRadius: "20px",
          color: "black",
        }}
      >
        <h2>Grade Rules</h2>

        <div className="rule-row">
          <span>90-100</span>
          <span>A</span>
          <span>Excellent</span>
        </div>

        <div className="rule-row">
          <span>75-89</span>
          <span>B</span>
          <span>Very Good</span>
        </div>

        <div className="rule-row">
          <span>60-74</span>
          <span>C</span>
          <span>Good</span>
        </div>

        <div className="rule-row">
          <span>40-59</span>
          <span>D</span>
          <span>Average</span>
        </div>

        <div className="rule-row">
          <span>Below 40</span>
          <span>F</span>
          <span>Needs Improvement</span>
        </div>
      </div>
    </div>
  );
}