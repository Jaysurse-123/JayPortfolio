import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">

      {/* HEADER */}
      <section className="projects-header">
        <div className="projects-line"></div>

        <p className="projects-label">MY PROJECTS</p>

        <h1>
          Things I've <span>built.</span>
        </h1>

        <p className="projects-subtitle">
          Practical projects created while learning software development,
          AI and data science.
        </p>
      </section>


      {/* PROJECTS */}
      <section className="projects-content">

        {/* PROJECT 01 */}
        <article className="project-card">

          <div className="project-number">
            01
          </div>

          <div className="project-main">

            <div className="project-visual">
              <div className="project-icon">
                CS
              </div>

              <div className="project-orbit orbit-a"></div>
              <div className="project-orbit orbit-b"></div>
            </div>

            <div className="project-info">

              <p className="project-type">
                FULL-STACK WEB APPLICATION
              </p>

              <h2>
                Connect<span>Sphere</span>
              </h2>

              <p className="project-description">
                A social media web application inspired by modern
                social platforms. Users can create accounts, upload
                posts, interact with content and manage their profiles.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JWT</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <span className="project-status">
                  In Development
                </span>
              </div>

            </div>

          </div>
        </article>


        {/* PROJECT 02 */}
        <article className="project-card">

          <div className="project-number">
            02
          </div>

          <div className="project-main">

            <div className="project-visual railway-visual">
              <div className="project-icon">
                RT
              </div>

              <div className="project-grid-lines"></div>
            </div>

            <div className="project-info">

              <p className="project-type">
                JAVA / DATABASE APPLICATION
              </p>

              <h2>
                Railway Ticket <span>Reservation</span>
              </h2>

              <p className="project-description">
                A railway ticket reservation system developed to
                manage passenger bookings, ticket information,
                cancellations and reservation records.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>JDBC</span>
                <span>MySQL</span>
                <span>Swing</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <span className="project-status completed">
                  Completed
                </span>
              </div>

            </div>

          </div>
        </article>


        {/* PROJECT 03 */}
        <article className="project-card">

          <div className="project-number">
            03
          </div>

          <div className="project-main">

            <div className="project-visual fake-news-visual">
              <div className="project-icon">
                AI
              </div>

              <div className="scan-line"></div>
            </div>

            <div className="project-info">

              <p className="project-type">
                ARTIFICIAL INTELLIGENCE / NLP
              </p>

              <h2>
                Fake News <span>Detection</span>
              </h2>

              <p className="project-description">
                An AI-based project focused on analysing news content
                and identifying potentially misleading or fake
                information using NLP and machine learning concepts.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>NLP</span>
                <span>Machine Learning</span>
                <span>RAG</span>
                <span>AI</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <span className="project-status">
                  Learning Project
                </span>
              </div>

            </div>

          </div>
        </article>


        {/* PROJECT 04 */}
        <article className="project-card">

          <div className="project-number">
            04
          </div>

          <div className="project-main">

            <div className="project-visual accident-visual">
              <div className="project-icon">
                AD
              </div>

              <div className="signal signal-one"></div>
              <div className="signal signal-two"></div>
              <div className="signal signal-three"></div>
            </div>

            <div className="project-info">

              <p className="project-type">
                AI / MOBILE / SAFETY SYSTEM
              </p>

              <h2>
                Accident <span>Detection System</span>
              </h2>

              <p className="project-description">
                A proposed intelligent safety system designed to
                detect road accidents and help send alerts to
                appropriate contacts or emergency services.
              </p>

              <div className="project-tech">
                <span>AI</span>
                <span>Computer Vision</span>
                <span>Mobile App</span>
                <span>Alerts</span>
              </div>

              <div className="project-links">
                <span className="project-status">
                  Major Project
                </span>
              </div>

            </div>

          </div>
        </article>

      </section>


      {/* BOTTOM */}
      <section className="projects-bottom">

        <p>BUILD • LEARN • IMPROVE</p>

        <h2>
          More projects are
          <span> coming.</span>
        </h2>

        <p>
          I am continuously learning and building new applications
          to strengthen my development and AI skills.
        </p>

      </section>

    </main>
  );
}

export default Projects;