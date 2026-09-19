import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Open to opportunities
          </div>

          <p className="hero-small">
            AI & DATA SCIENCE ENGINEERING STUDENT
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Jay Surse.</span>
          </h1>

          <h2>
            I build intelligent solutions with
            <strong> AI & Technology.</strong>
          </h2>

          <p className="hero-description">
            I'm a passionate AI & Data Science engineering student
            interested in Artificial Intelligence, Machine Learning,
            Generative AI and Full-Stack Development. I enjoy turning
            ideas into practical applications and continuously improving
            my technical skills.
          </p>

          <div className="hero-buttons">

            {/* View Projects Button */}
            <a
              href="/projects"
              className="primary-btn"
            >
              View My Projects
              <span>→</span>
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Jay_Surse_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume
              <span>↓</span>
            </a>

          </div>

          <div className="home-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your-email@gmail.com">
              Email
            </a>

          </div>

        </div>


        <div className="hero-profile">

          <div className="profile-glow"></div>

          <div className="profile-ring">

            <div className="profile-photo">
              <span>JS</span>
            </div>

          </div>


          <div className="floating-card card-ai">

            <span className="card-icon">
              AI
            </span>

            <div>
              <strong>Artificial</strong>
              <small>Intelligence</small>
            </div>

          </div>


          <div className="floating-card card-code">

            <span className="card-icon">
              &lt;/&gt;
            </span>

            <div>
              <strong>Developer</strong>
              <small>Building Projects</small>
            </div>

          </div>


          <div className="floating-card card-data">

            <span className="card-icon">
              DS
            </span>

            <div>
              <strong>Data Science</strong>
              <small>Learning & Building</small>
            </div>

          </div>

        </div>

      </section>


      <section className="quick-stats">

        <div className="stat-item">
          <h3>AI & DS</h3>
          <p>Engineering</p>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <h3>Python</h3>
          <p>Primary Language</p>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <h3>Full Stack</h3>
          <p>Development</p>
        </div>

        <div className="stat-line"></div>

        <div className="stat-item">
          <h3>GenAI</h3>
          <p>Exploring</p>
        </div>

      </section>

    </main>
  );
}

export default Home;