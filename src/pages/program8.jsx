export default function Program8() {
  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>Performance Analytics</h2>

      <div className="dark-box">
        <p>
          Pandas → Reads CSV and provides
          statistical summaries.
        </p>

        <p>
          NumPy → Computes mean, median
          and standard deviation.
        </p>

        <p>
          Matplotlib → Creates charts for
          student performance analysis.
        </p>
      </div>

      <div className="output-box black-text">
        <p>
          --- Statistical Summary ---
        </p>

        <br />

        <p>
          Mean Scores (Math, Science,
          English): [84 89 86]
        </p>

        <p>
          Median Scores (Math, Science,
          English): [85 89 88]
        </p>

        <p>
          Standard Deviation (Math,
          Science, English): [8 6 7]
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
        <h3>
          Average Scores per Subject
        </h3>

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
}