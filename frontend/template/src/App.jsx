import { useState, useEffect } from 'react';
import './App.css';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'ff5b0667-25d2-477e-bfc3-2fe15cc357c3',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Network error. Try again later.');
    }
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">Hello Harsh Here<span>,</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <span className="badge">Available for Opportunities</span>
          <h1>Hi, I’m <span>Harsh Dabhi</span></h1>
          <p className="hero-role">Full-Stack Web Developer & IT Graduate</p>
          <p className="hero-bio">
            I build fast, clean, and scalable web applications using React, Node.js, and modern databases.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-image-box">
          <img
            src="/profile.jpg"
            alt="Your Name"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/340x400/e4e4e7/18181b?text=Your+Photo';
            }}
          />
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="section">
        <div className="section-header">
          <span className="section-tag">01 / About Me</span>
          <h2>Who I Am & What I Do</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a final-year B.Sc. IT student passionate about full-stack engineering, database management, and crafting intuitive user experiences.
            </p>
            <p>
              From designing REST APIs in Express to building responsive interfaces in React, I enjoy turning real-world problems into reliable software products.
            </p>
          </div>

          <div className="skills-box">
            <h3>Core Technologies & Frameworks</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>Tailwind CSS</span>
              <span>JavaScript (ES6+)</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>REST API</span>
              <span>PHP</span>
              <span>.NET</span>
              <span>C</span>
              <span>Data Structure</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Drizzle</span>
              <span>Prisma</span>
              <span>GraphQL</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-tag">02 / Selected Work</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-top">
                <span className="project-number">0{index + 1}</span>
                <div className="project-links">
                  {/* <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a> */}
                  {/* {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>
                  )} */}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.split(',').map((t, i) => (
                  <span key={i}>{t.trim()}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Personal Details & Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <span className="section-tag">03 / Contact</span>
          <h2>Personal Details & Message</h2>
        </div>

        <div className="contact-grid">
          <div className="personal-details">
            <p className="contact-intro">
              Feel free to reach out for full-time roles, freelance projects, or tech discussions.
            </p>

            <div className="detail-item">
              <strong>Full Name</strong>
              <span>Harsh Dabhi</span>
            </div>
            <div className="detail-item">
              <strong>Location</strong>
              <span>Surat, Gujarat, India</span>
            </div>
            <div className="detail-item">
              <strong>Email</strong>
              <a href="mailto:harshdabhi71@gmail.com">harshdabhi71@gmail.com</a>
            </div>
            <div className="detail-item">
              <strong>Phone</strong>
              <span>+91 6352315282</span>
            </div>
            <div className="detail-item">
              <strong>Socials</strong>
              <div className="social-links">
                <a href="https://github.com/harsh11-cmd" target="_blank" rel="noreferrer">GitHub</a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/harsh-dabhi-475364392/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="rahul@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button type="submit" className="btn-primary">Send Message</button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>From @Harsh Dabhi. Thank you for Visit</p>
      </footer>
    </div>
  );
}

export default App;