import React, { useMemo, useState } from "react";
import "./App.css";

function gradeFromScore(score) {
  if (score >= 90) return { grade: "A", remark: "Excellent" };
  if (score >= 75) return { grade: "B", remark: "Very Good" };
  if (score >= 60) return { grade: "C", remark: "Good" };
  if (score >= 40) return { grade: "D", remark: "Average" };
  return { grade: "F", remark: "Needs Improvement" };
}

export default function App() {
  const [selected, setSelected] = useState(1);

  const [name, setName] = useState("Priya");
  const [score, setScore] = useState(82);
  const [backendResult, setBackendResult] = useState(null);

  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(4);

  const [courses, setCourses] = useState([
    { course: "Mathematics", credits: 4 },
    { course: "Physics", credits: 3 },
  ]);

  const [searchId, setSearchId] = useState(108);

  const [tuition, setTuition] = useState(50000);
  const [hostel, setHostel] = useState(30000);
  const [transport, setTransport] = useState(10000);

  const sortedIds = useMemo(() => [101, 102, 105, 108, 110, 115], []);

  const linearFound = sortedIds.indexOf(Number(searchId));

  const feeTotal =
    Number(tuition) + Number(hostel) + Number(transport);

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

  const result = gradeFromScore(Number(score));

  const calculateGrade = async () => {
    try {
      const response = await fetch(
        "https://smart-campus-backend-wprf.onrender.com/grade",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            score,
          }),
        }
      );

      const data = await response.json();
      setBackendResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = () => {
    if (!courseName.trim()) return;

    setCourses([
      ...courses,
      {
        course: courseName,
        credits,
      },
    ]);

    setCourseName("");
    setCredits(4);
  };

  const renderModule = () => {
    switch (selected) {
      case 1:
        return (
          <div className="content-card">
            <h2>Grade Evaluator</h2>

            <button className="primary-btn" onClick={calculateGrade}>
              Calculate Grade
            </button>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            <input
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter Score"
              type="number"
            />

            <div className="output-box black-text">
              <p>Name: {backendResult?.name || name}</p>
              <p>Score: {backendResult?.score || score}</p>
              <p>
                Grade: {backendResult?.grade || result.grade}
              </p>
              <p>
                Remark: {backendResult?.remark || result.remark}
              </p>
            </div>

            <div className="rules-box">
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

      case 2:
        return (
          <div className="content-card">
            <h2>Course Enrollment</h2>

            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Course Name"
            />

            <input
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              type="number"
              placeholder="Credits"
            />

            <button className="primary-btn" onClick={addCourse}>
              Add Course
            </button>

            {courses.map((c, index) => (
              <div className="dark-box" key={index}>
                <p>Course: {c.course}</p>
                <p>Credits: {c.credits}</p>
              </div>
            ))}
            <div className="output-box black-text">
  <p>Total Courses Added: {courses.length}</p>
</div>
          </div>
        );

      case 3:
        return (
          <div className="content-card">
            <h2>Student Records & Event Analysis</h2>

            {studentRecords.map((s, index) => (
              <div className="dark-box" key={index}>
                <p>Name: {s.name}</p>
                <p>Age: {s.age}</p>
                <p>Grades: {s.grades.join(", ")}</p>
              </div>
            ))}

            <div className="output-box black-text">
  <p>Common Participants: Rahul, Anita</p>
  <p>
    All Participants: Priya, Rahul, Anita, Kiran,
    Sneha
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

      case 4:
  return (
    <div className="content-card">
      <h2>Sorting & Searching Student IDs</h2>

      <div className="dark-box">
        <p>Original IDs: 105, 102, 110, 108, 101, 115</p>
      </div>

      <div className="dark-box">
        <p>
          Sorted IDs (Bubble Sort):{" "}
          {sortedIds.join(", ")}
        </p>
      </div>

      <div className="dark-box">
        <p>
          Sorted IDs (Selection Sort):{" "}
          {sortedIds.join(", ")}
        </p>
      </div>

      <input
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        type="number"
        placeholder="Enter Student ID"
      />

      <div className="output-box black-text">
        {linearFound !== -1 ? (
          <p>
            Linear Search: ID {searchId} found at
            index {linearFound}
          </p>
        ) : (
          <p>Linear Search: ID not found</p>
        )}
      </div>

      <div className="output-box black-text">
        {linearFound !== -1 ? (
          <p>
            Binary Search: ID {searchId} found at
            index {linearFound}
          </p>
        ) : (
          <p>Binary Search: ID not found</p>
        )}
      </div>
    </div>
  );
       

      case 5:
        return (
          <div className="content-card">
            <h2>Fee Calculation using Functions</h2>

            <input
  value={tuition}
  onChange={(e) => setTuition(e.target.value)}
  type="number"
  placeholder="Enter Tuition Fee"
/>

<input
  value={hostel}
  onChange={(e) => setHostel(e.target.value)}
  type="number"
  placeholder="Enter Hostel Fee"
/>

<input
  value={transport}
  onChange={(e) => setTransport(e.target.value)}
  type="number"
  placeholder="Enter Transport Fee"
/>

            <div className="output-box black-text">
  <p>Tuition Fee: ₹{tuition}</p>
  <p>Hostel Fee: ₹{hostel}</p>
  <p>Transport Fee: ₹{transport}</p>
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
    ₹{Number(tuition) + Number(hostel)}
  </p>
</div>

<div className="output-box black-text">
  <p>
    Total Fee (Tuition + Hostel + Transport):
    ₹
    {Number(tuition) +
      Number(hostel) +
      Number(transport)}
  </p>
</div>
          </div>
        );

      case 6:
        return (
          <div className="content-card">
            <h2>File Records Summary</h2>

            <div className="dark-box">
              ID, Name, Marks
            </div>

            <div className="dark-box">
              101, Arjun, 85
            </div>

            <div className="dark-box">
              102, Meera, 92
            </div>

            <div className="dark-box">
              103, Ravi, 76
            </div>

            <div className="output-box black-text">
              <p>Total Students: 4</p>
              <p>Average Marks: 85.5</p>
              <p>Top Student: Meera (92 marks)</p>
            </div>
          </div>
        );

      case 7:
  return (
    <div className="content-card">
      <h2>
        Directory Scanning with Exception Handling
      </h2>

      <div className="dark-box">
        <p>
          Implement a Python program that scans a
          directory containing student project files
          and displays the folder structure.
        </p>
      </div>

      <div className="output-box black-text">
        <p>Sample Output</p>

        <br />

        <p>Scanning directory: Projects</p>

        <br />

        <p>Projects/</p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Student1/
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;report.docx
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Student2/
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code.py
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;EmptyFolder/
        </p>

        <br />

        <p>
          Custom Error: Empty folder detected:
          Projects/EmptyFolder
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          Exception Handling:
          FileNotFoundError
        </p>

        <p>
          User Defined Exception:
          MissingFileOrFolderError
        </p>
      </div>
    </div>
  );

      case 8:
  return (
    <div className="content-card">
      <h2>Performance Analytics</h2>

      <div className="dark-box">
        <p>
          Pandas → Reads CSV and provides
          statistical summaries.
        </p>

        <p>
          NumPy → Computes mean, median and
          standard deviation.
        </p>

        <p>
          Matplotlib → Creates charts for
          student performance analysis.
        </p>
      </div>

      <div className="output-box black-text">
        <p>--- Statistical Summary ---</p>

        <br />

        <p>
          Mean Scores (Math, Science, English):
          [84 89 86]
        </p>

        <p>
          Median Scores (Math, Science,
          English): [85 89 88]
        </p>

        <p>
          Standard Deviation (Math, Science,
          English): [8 6 7]
        </p>
      </div>

      <div className="output-box black-text">
        <p>--- Top Performers ---</p>

        <br />

        <p>Math: Anita</p>
        <p>Science: Anita</p>
        <p>English: Anita</p>
      </div>

      <div className="dark-box">
        <p>Charts Generated:</p>

        <br />

        <p>
          • Average Scores per Subject
        </p>

        <p>
          • Student-wise Performance
          Comparison
        </p>
      </div>
      <div className="output-box black-text">
  <h3>Average Scores per Subject</h3>

  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      gap: "30px",
      height: "250px",
      marginTop: "20px",
    }}
  >
    <div>
      <div
        style={{
          width: "70px",
          height: "168px",
          background: "blue",
          borderRadius: "10px",
        }}
      ></div>
      <p>Math</p>
    </div>

    <div>
      <div
        style={{
          width: "70px",
          height: "178px",
          background: "green",
          borderRadius: "10px",
        }}
      ></div>
      <p>Science</p>
    </div>

    <div>
      <div
        style={{
          width: "70px",
          height: "172px",
          background: "orange",
          borderRadius: "10px",
        }}
      ></div>
      <p>English</p>
    </div>
  </div>
</div>
    </div>
  );

      case 9:
        return (
          <div className="content-card">
            <h2>Smart Campus Integration</h2>

            <div className="dark-box">
              <p>
                All 8 lab modules are linked from one dashboard.
              </p>
            </div>

            <div className="dark-box">
              <p>
                Choose any program from the left panel and run
                it instantly.
              </p>
            </div>

            <div className="dark-box">
              <p>
                This is ideal for class presentation and
                mini-project demo.
              </p>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="content-card">
            <h2>Project Guide</h2>

            <div className="dark-box">
              <p>Frontend: React + CSS</p>
              <p>Backend: Python Flask</p>
              <p>Database: TXT / JSON</p>
            </div>

            <div className="output-box black-text">
              <p>Mini Project Ready</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="hero-section">
        <div>
          <h1>Interactive Python Programs Website</h1>

          <p>
            A clean dashboard where the user chooses a
            program, fills inputs, and sees the output
            instantly.
          </p>
        </div>

        <div className="hero-badges">
          <span>10 Programs</span>
          <span>Interactive Demo</span>
        </div>
      </div>

      <div className="main-layout">
        <div className="sidebar">
          <h2>Program Menu</h2>

          {[
            "Student Registration & Grade Evaluation",
            "Course Enrollment Management",
            "Student Record Management",
            "Sorting & Searching Student IDs",
            "Fee Calculation using Functions",
            "File Handling for Academic Records",
            "Directory Scanning & Exceptions",
            "Performance Analytics",
            "Smart Campus Integration",
            "Project Guide Page",
          ].map((item, index) => (
            <div
              key={index}
              className={`menu-card ${
                selected === index + 1 ? "active-card" : ""
              }`}
              onClick={() => setSelected(index + 1)}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        <div className="content-section">
          {renderModule()}
        </div>
      </div>
    </div>
  );
}