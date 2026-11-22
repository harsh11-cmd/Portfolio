import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Portfolio Projects Data
const projects = [
  {
    id: 1,
    title: "Full-Stack Job Portal",
    tech: "React, Node.js, Express, MongoDB, Tailwind",
    description: "Role-based recruitment platform with dynamic location filters and image uploads.",
    github: "https://github.com/harsh11-cmd/Job-Portal-Mern",
    //live: "https://your-demo-link.vercel.app"
  },
  {
    id: 2,
    title: "Venue Booking & Hall Management",
    tech: "ASP.NET Core, SQL Server, Bootstrap",
    description: "End-to-end hall reservation and scheduling management system.",
    github: "https://github.com/yourusername/venue-booking",
    //live: "#"
  },
  {
    id: 3,
    title: "Placement Process Management System",
    tech: "PHP, MySQL, HTML, CSS",
    description: "Campus placement portal supporting students, faculty coordinators, and recruiters.",
    github: "https://github.com/yourusername/placement-system",
    //live: "#"
  }
];

// API Route to fetch projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// API Route for Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  console.log("New Portfolio Message:", { name, email, message });
  res.status(200).json({ success: true, message: "Message received!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));