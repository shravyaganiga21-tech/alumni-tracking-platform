const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AlumniConnect backend is running 🚀",
  });
});

// Alumni API
app.get("/api/alumni", (req, res) => {
  const alumni = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Google",
    industry: "Technology",
    experience: "3 Years",
    education: "B.Tech in Computer Science, BMSCE",
    skills: ["Java", "React", "Node.js", "DSA"],
    about:
      "Software Engineer with experience in building scalable web applications and solving complex technical problems.",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Product Manager",
    company: "Microsoft",
    industry: "Technology",
    experience: "5 Years",
    education: "B.Tech in Information Science, BMSCE",
    skills: ["Product Management", "SQL", "Data Analysis", "Leadership"],
    about:
      "Product Manager focused on building user-centric products and working with cross-functional teams.",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "Data Analyst",
    company: "Deloitte",
    industry: "Consulting",
    experience: "2 Years",
    education: "B.Tech in Computer Science, BMSCE",
    skills: ["Python", "SQL", "Power BI", "Excel"],
    about:
      "Data Analyst who helps organizations make better decisions using data and analytics.",
  },
];
  res.json(alumni);
});
// Opportunities API
app.get("/api/opportunities", (req, res) => {
  const opportunities = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      type: "Internship",
      location: "Bangalore",
      postedBy: "Rahul Sharma",
      description:
        "A software engineering internship opportunity for students interested in building scalable applications and improving their problem-solving skills.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft",
      type: "Full Time",
      location: "Hyderabad",
      postedBy: "Priya Nair",
      description:
        "A frontend development role focused on building modern and responsive web applications using current web technologies.",
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Deloitte",
      type: "Internship",
      location: "Bangalore",
      postedBy: "Arjun Kumar",
      description:
        "An internship opportunity for students interested in data analysis, visualization, and using data to support business decisions.",
    },
  ];

  res.json(opportunities);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});