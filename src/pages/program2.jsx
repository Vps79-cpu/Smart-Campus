import { useState } from "react";

export default function Program2() {
  const [courseName, setCourseName] =
    useState("");

  const [credits, setCredits] =
    useState(4);

  const [courses, setCourses] = useState([
    {
      course: "Mathematics",
      credits: 4,
    },
    {
      course: "Physics",
      credits: 3,
    },
  ]);

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

  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>Course Enrollment</h2>

      <input
        value={courseName}
        onChange={(e) =>
          setCourseName(e.target.value)
        }
        placeholder="Course Name"
      />

      <input
        value={credits}
        onChange={(e) =>
          setCredits(e.target.value)
        }
        type="number"
        placeholder="Credits"
      />

      <button
        className="primary-btn"
        onClick={addCourse}
      >
        Add Course
      </button>

      {courses.map((c, index) => (
        <div className="dark-box" key={index}>
          <p>Course: {c.course}</p>
          <p>Credits: {c.credits}</p>
        </div>
      ))}

      <div className="output-box black-text">
        <p>
          Total Courses Added:
          {courses.length}
        </p>
      </div>
    </div>
  );
}