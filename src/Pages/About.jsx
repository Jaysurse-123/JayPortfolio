import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-header">

        <div className="section-line"></div>

        <p className="about-top-label">
          ABOUT ME
        </p>

        <h1>
          Get to know <span>Jay.</span>
        </h1>

        <p className="about-subtitle">
          Engineering student
          <b>•</b>
          AI enthusiast
          <b>•</b>
          Developer
        </p>

      </section>


      <section className="about-main">

        <div className="about-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="about-profile">
            <span className="profile-j">J</span>
            <span className="profile-s">S</span>
          </div>


          <div className="about-floating-card ai-card">

            <div className="floating-icon">
              AI
            </div>

            <div>
              <strong>AI</strong>
              <small>Artificial Intelligence</small>
            </div>

          </div>


          <div className="about-floating-card developer-card">

            <div className="floating-icon">
              &lt;/&gt;
            </div>

            <div>
              <strong>Developer</strong>
              <small>Building Projects</small>
            </div>

          </div>


          <div className="about-floating-card data-card">

            <div className="floating-icon">
              DS
            </div>

            <div>
              <strong>Data Science</strong>
              <small>Turning Data into Insights</small>
            </div>

          </div>


          <p className="future-text">
            Better Code
            <span>•</span>
            Smarter Solutions
            <span>•</span>
            A Brighter Future
          </p>

        </div>


        <div className="about-info">

          <p className="about-label">
            WHO I AM
          </p>

          <h2>
            I'm a student who loves
            <br />
            <span>building with technology.</span>
          </h2>

          <p className="about-description">
            I'm Jay Nitin Surse, a third-year B.E. student specializing
            in Artificial Intelligence & Data Science. I enjoy learning
            how technology works and using it to create practical
            applications.
          </p>

          <p className="about-description">
            My interests include Artificial Intelligence, Machine Learning,
            Generative AI, Data Science and Full-Stack Development.
            I believe in continuous learning and building real-world
            projects.
          </p>


          <div className="about-areas">

            <div className="area-item">
              <div className="area-icon">AI</div>
              <h3>AI</h3>
              <p>Intelligent Systems</p>
            </div>

            <div className="area-item">
              <div className="area-icon">DS</div>
              <h3>Data Science</h3>
              <p>Data → Insights</p>
            </div>

            <div className="area-item">
              <div className="area-icon">&lt;/&gt;</div>
              <h3>Full Stack</h3>
              <p>Web Applications</p>
            </div>

            <div className="area-item">
              <div className="area-icon">✦</div>
              <h3>GenAI</h3>
              <p>Next Generation</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;