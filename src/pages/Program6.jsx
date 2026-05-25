export default function Program6() {
  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>File Records Summary</h2>

      <div className="dark-box">
        <p>ID, Name, Marks</p>
      </div>

      <div className="dark-box">
        <p>101, Arjun, 85</p>
      </div>

      <div className="dark-box">
        <p>102, Meera, 92</p>
      </div>

      <div className="dark-box">
        <p>103, Ravi, 76</p>
      </div>

      <div className="output-box black-text">
        <p>Total Students: 4</p>

        <p>Average Marks: 85.5</p>

        <p>
          Top Student:
          Meera (92 marks)
        </p>
      </div>
    </div>
  );
}