import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

import Program1 from "./pages/Program1";
import Program2 from "./pages/Program2";
import Program3 from "./pages/Program3";
import Program4 from "./pages/Program4";
import Program5 from "./pages/Program5";
import Program6 from "./pages/Program6";
import Program7 from "./pages/Program7";
import Program8 from "./pages/Program8";
import Program9 from "./pages/Program9";
import Program10 from "./pages/Program10";

function Home() {
  return (
    <div className="app">
      <div className="hero-section">
        <div>
          <h1>SMART CAMPUS WEBSITE</h1>

          <p>
            Smart Campus Information System using
            Python, React and Flask Integration.
          </p>
        </div>
      </div>

      <div className="program-list">
        <Link to="/program1">
          <div className="menu-card">
            <h3>
              Student Registration & Grade
              Evaluation
            </h3>
          </div>
        </Link>

        <Link to="/program2">
          <div className="menu-card">
            <h3>
              Course Enrollment Management
            </h3>
          </div>
        </Link>

        <Link to="/program3">
          <div className="menu-card">
            <h3>
              Student Record Management
            </h3>
          </div>
        </Link>

        <Link to="/program4">
          <div className="menu-card">
            <h3>
              Sorting & Searching Student IDs
            </h3>
          </div>
        </Link>

        <Link to="/program5">
          <div className="menu-card">
            <h3>
              Fee Calculation using Functions
            </h3>
          </div>
        </Link>

        <Link to="/program6">
          <div className="menu-card">
            <h3>
              File Handling for Academic Records
            </h3>
          </div>
        </Link>

        <Link to="/program7">
          <div className="menu-card">
            <h3>
              Directory Scanning & Exceptions
            </h3>
          </div>
        </Link>

        <Link to="/program8">
          <div className="menu-card">
            <h3>
              Performance Analytics
            </h3>
          </div>
        </Link>

        <Link to="/program9">
          <div className="menu-card">
            <h3>
              Smart Campus Integration
            </h3>
          </div>
        </Link>

        <Link to="/program10">
          <div className="menu-card">
            <h3>
              Project Guide Page
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/program1"
          element={<Program1 />}
        />

        <Route
          path="/program2"
          element={<Program2 />}
        />

        <Route
          path="/program3"
          element={<Program3 />}
        />

        <Route
          path="/program4"
          element={<Program4 />}
        />

        <Route
          path="/program5"
          element={<Program5 />}
        />

        <Route
          path="/program6"
          element={<Program6 />}
        />

        <Route
          path="/program7"
          element={<Program7 />}
        />

        <Route
          path="/program8"
          element={<Program8 />}
        />

        <Route
          path="/program9"
          element={<Program9 />}
        />

        <Route
          path="/program10"
          element={<Program10 />}
        />
      </Routes>
    </BrowserRouter>
  );
}