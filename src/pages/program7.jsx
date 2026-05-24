export default function Program7() {
  return (
    <div
      className="content-card"
      style={{
        width: "80%",
        margin: "40px auto",
      }}
    >
      <h2>
        Directory Scanning with Exception
        Handling
      </h2>

      <div className="dark-box">
        <p>
          Implement a Python program that
          scans a directory containing
          student project files and displays
          the folder structure.
        </p>
      </div>

      <div className="output-box black-text">
        <p>Sample Output</p>

        <br />

        <p>
          Scanning directory: Projects
        </p>

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
          Custom Error: Empty folder
          detected:
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
}