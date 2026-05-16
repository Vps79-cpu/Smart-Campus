import React, { useMemo, useState } from "react";
const Card = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardHeader = ({ children }) => <div>{children}</div>;

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Input = (props) => (
  <input
    className="w-full rounded-xl border p-3 text-white"
    {...props}
  />
);

const Textarea = (props) => (
  <textarea
    className="w-full rounded-xl border p-3 text-white"
    {...props}
  />
);

const Badge = ({ children, className = "" }) => (
  <span className={`rounded-full bg-white/20 px-3 py-1 text-xs ${className}`}>
    {children}
  </span>
);

const Separator = ({ className = "" }) => (
  <div className={`h-px w-full bg-white/10 ${className}`} />
);
import {
  BookOpen,
  UserRound,
  Layers3,
  Search,
  Calculator,
  FileText,
  FolderOpen,
  ChartNoAxesCombined,
  ArrowRight,
  Play,
  Sparkles,
  ChevronRight,
  CircleCheck,
  ScrollText,
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Student Registration & Grade Evaluation",
    icon: UserRound,
    summary: "Enter a name and score to get grade and remarks.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Course Enrollment Management",
    icon: BookOpen,
    summary: "Add courses with credits and skip invalid entries.",
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    id: 3,
    title: "Student Record Management",
    icon: Layers3,
    summary: "Store student details using lists, dictionaries, and sets.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    title: "Sorting & Searching Student IDs",
    icon: Search,
    summary: "Sort IDs and search using linear / binary search.",
    color: "from-amber-500 to-orange-400",
  },
  {
    id: 5,
    title: "Fee Calculation using Functions",
    icon: Calculator,
    summary: "Calculate total fee with optional hostel and transport.",
    color: "from-rose-500 to-pink-400",
  },
  {
    id: 6,
    title: "File Handling for Academic Records",
    icon: FileText,
    summary: "Write, read, and summarize student records from a file.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: 7,
    title: "Directory Scanning & Exceptions",
    icon: FolderOpen,
    summary: "Display folder structure and show custom errors.",
    color: "from-lime-500 to-green-400",
  },
  {
    id: 8,
    title: "Performance Analytics",
    icon: ChartNoAxesCombined,
    summary: "Show statistics and charts for student scores.",
    color: "from-cyan-500 to-sky-400",
  },
  {
    id: 9,
    title: "Smart Campus Integration",
    icon: Sparkles,
    summary: "Run all modules from one modern dashboard.",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 10,
    title: "Project Guide Page",
    icon: ScrollText,
    summary: "Use the website as a final lab presentation page.",
    color: "from-slate-600 to-slate-400",
  },
];

const sampleStudents = [
  { name: "Priya", score: 82, age: 20, grades: [85, 90, 78] },
  { name: "Rahul", score: 71, age: 21, grades: [72, 88, 91] },
  { name: "Anita", score: 95, age: 19, grades: [95, 89, 92] },
];

function gradeFromScore(score) {
  if (score >= 90) return { grade: "A", remark: "Excellent" };
  if (score >= 75) return { grade: "B", remark: "Very Good" };
  if (score >= 60) return { grade: "C", remark: "Good" };
  if (score >= 40) return { grade: "D", remark: "Average" };
  return { grade: "F", remark: "Needs Improvement" };
}

export default function SmartCampusLabWebsite() {
  const [selected, setSelected] = useState(1);
  const [name, setName] = useState("Priya");
  const [score, setScore] = useState(82);
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
  const [studentRecords] = useState(sampleStudents);
  const [backendResult, setBackendResult] = useState(null);
  const sortedIds = useMemo(() => [101, 102, 105, 108, 110, 115], []);
  const linearFound = sortedIds.indexOf(Number(searchId));
  const binaryFound = sortedIds.indexOf(Number(searchId));
  const feeTotal = Number(tuition) + Number(hostel) + Number(transport);
  const result = gradeFromScore(Number(score));
  const calculateGrade = async () => {
  const response = await fetch("https://smart-campus-backend-wprf.onrender.com/grade", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      score,
    }),
  });

  const data = await response.json();
  setBackendResult(data);
};
  function addCourse() {
    if (!courseName.trim() || Number(credits) <= 0) return;
    setCourses((prev) => [...prev, { course: courseName.trim(), credits: Number(credits) }]);
    setCourseName("");
    setCredits(4);
  }

  const renderModule = () => {
    switch (selected) {
      case 1:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-3xl shadow-lg border-none">
              <CardHeader>
                <CardTitle>Grade Evaluator</CardTitle>
                <Button
  onClick={calculateGrade}
  className="mt-4 rounded-xl bg-blue-500 px-4 py-2 text-white"
>
  Calculate Grade
</Button>
{backendResult && (
  <div className="mt-4 rounded-xl bg-white/10 p-4">
    <p>Name: {backendResult.name}</p>
    <p>Score: {backendResult.score}</p>
    <p>Grade: {backendResult.grade}</p>
    <p>Remark: {backendResult.remark}</p>
  </div>
)}
              </CardHeader>
              <CardContent className="space-y-4">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Student name" />
                <Input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Score" />
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <div><b>Name:</b> {name}</div>
                  <div><b>Score:</b> {score}</div>
                  <div><b>Grade:</b> {result.grade}</div>
                  <div><b>Remark:</b> {result.remark}</div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl shadow-lg border-none">
              <CardHeader>
                <CardTitle>Grade Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {[
                  ["90-100", "A", "Excellent"],
                  ["75-89", "B", "Very Good"],
                  ["60-74", "C", "Good"],
                  ["40-59", "D", "Average"],
                  ["Below 40", "F", "Needs Improvement"],
                ].map(([r, g, rem]) => (
                  <div key={r} className="flex items-center justify-between rounded-2xl border p-3">
                    <span>{r}</span><Badge>{g}</Badge><span>{rem}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      case 2:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader>
              <CardTitle>Course Enrollment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 md:grid-cols-[1fr_160px_auto]">
                <Input value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Course name" />
                <Input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} placeholder="Credits" />
                <Button onClick={addCourse}><Play className="mr-2 h-4 w-4" />Add Course</Button>
              </div>
              <div className="space-y-2">
                {courses.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-2xl border p-3">
                    <span>{c.course}</span>
                    <Badge variant="secondary">{c.credits} credits</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Student Records & Event Analysis</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {studentRecords.map((s) => (
                <div key={s.name} className="rounded-2xl border p-4 text-sm">
                  <div><b>Name:</b> {s.name}</div>
                  <div><b>Age:</b> {s.age}</div>
                  <div><b>Grades:</b> {s.grades.join(", ")}</div>
                </div>
              ))}
              <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                Common participants: Rahul, Anita<br />
                All participants: Priya, Rahul, Anita, Kiran, Sneha
              </div>
            </CardContent>
          </Card>
        );
      case 4:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Sorting & Searching</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm"><b>Sorted IDs:</b> {sortedIds.join(", ")}</div>
              <Input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Search ID" />
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <div className="rounded-2xl border p-4">Linear search: {linearFound >= 0 ? `Found at index ${linearFound}` : "Not found"}</div>
                <div className="rounded-2xl border p-4">Binary search: {binaryFound >= 0 ? `Found at index ${binaryFound}` : "Not found"}</div>
              </div>
            </CardContent>
          </Card>
        );
      case 5:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Fee Calculator</CardTitle></CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <Input type="number" value={tuition} onChange={(e) => setTuition(e.target.value)} placeholder="Tuition" />
              <Input type="number" value={hostel} onChange={(e) => setHostel(e.target.value)} placeholder="Hostel" />
              <Input type="number" value={transport} onChange={(e) => setTransport(e.target.value)} placeholder="Transport" />
              <div className="md:col-span-3 rounded-2xl bg-slate-50 p-4 text-sm">
                <b>Total fee:</b> {feeTotal}
              </div>
            </CardContent>
          </Card>
        );
      case 6:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>File Records Summary</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-2xl border p-4">ID, Name, Marks</div>
              <div className="rounded-2xl border p-4">101, Arjun, 85</div>
              <div className="rounded-2xl border p-4">102, Meera, 92</div>
              <div className="rounded-2xl border p-4">103, Ravi, 76</div>
              <div className="rounded-2xl bg-slate-50 p-4">
                Total Students: 4<br />Average Marks: 85.5<br />Top Student: Meera
              </div>
            </CardContent>
          </Card>
        );
      case 7:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Directory Scanner</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Input placeholder="Enter directory path" defaultValue="Projects/" />
              <div className="rounded-2xl border p-4 font-mono whitespace-pre-line">Projects/\n  Student1/\n    report.docx\n  Student2/\n    code.py\n  EmptyFolder/</div>
              <div className="rounded-2xl bg-red-50 p-4">Custom Error: Empty folder detected: Projects/EmptyFolder</div>
            </CardContent>
          </Card>
        );
      case 8:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Performance Analytics</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-2xl border p-4">Mean scores: Math 84, Science 89, English 86</div>
              <div className="rounded-2xl border p-4">Top performers: Math - Anita, Science - Anita, English - Anita</div>
              <div className="rounded-2xl bg-slate-50 p-4">Charts can be added here using a chart library like Recharts or Chart.js.</div>
            </CardContent>
          </Card>
        );
      case 9:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Smart Campus Integration</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-2xl border p-4">All 8 lab modules are linked from one dashboard.</div>
              <div className="rounded-2xl border p-4">Choose any program from the left panel and run it instantly.</div>
              <div className="rounded-2xl border p-4">This is ideal for class presentation and mini-project demo.</div>
            </CardContent>
          </Card>
        );
      default:
        return (
          <Card className="rounded-3xl shadow-lg border-none">
            <CardHeader><CardTitle>Project Guide</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-2xl border p-4">Use this as a homepage for your Python lab website.</div>
              <div className="rounded-2xl border p-4">Each program can open in a separate section or page.</div>
              <div className="rounded-2xl border p-4">You can later connect real Python backend code using Flask or Django.</div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <Sparkles className="h-3.5 w-3.5" /> Smart Campus Python Lab
              </div>
              <h1 className="text-3xl font-bold md:text-5xl">Interactive Python Programs Website</h1>
              <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                A clean dashboard where the user chooses a program, fills inputs, and sees the output instantly.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="rounded-full px-3 py-1">10 Programs</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-slate-900">Interactive Demo</Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ChevronRight className="h-5 w-5" /> Program Menu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {modules.map((m) => {
                const Icon = m.icon;
                const active = selected === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelected(m.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${active ? "border-white/30 bg-white/15" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`rounded-2xl bg-gradient-to-br ${m.color} p-3 text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold leading-tight text-white">{m.title}</div>
                        <div className="mt-1 text-xs text-white/65">{m.summary}</div>
                      </div>
                      {active && <CircleCheck className="mt-1 h-5 w-5 text-emerald-300" />}
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <div className="space-y-6">
        <div>
  {renderModule()}
</div>

            <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/60">Frontend</div>
                    <div className="mt-1 font-semibold">React + Tailwind</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/60">Backend</div>
                    <div className="mt-1 font-semibold">Python Flask / Django</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/60">Database / Files</div>
                    <div className="mt-1 font-semibold">JSON, CSV, TXT</div>
                  </div>
                </div>
                <Separator className="my-6 bg-white/10" />
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-semibold">Best way to present this project</div>
                    <p className="text-sm text-white/65">
                      Make the homepage a dashboard, then link every program to its own section or page.
                    </p>
                  </div>
                  <Button className="rounded-2xl">
                    <ArrowRight className="mr-2 h-4 w-4" /> Open Selected Program
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
