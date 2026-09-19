import "./Skills.css";

function Skills() {
  return (
    <main className="skills-page">

      {/* HEADER */}
      <section className="skills-header">
        <div className="skills-line"></div>

        <p className="skills-label">MY SKILLS</p>

        <h1>
          Technologies I <span>work with.</span>
        </h1>

        <p className="skills-subtitle">
          A growing toolkit built through learning, practice and projects.
        </p>
      </section>


      {/* SKILLS CONTENT */}
      <section className="skills-content">

        {/* PROGRAMMING */}
        <div className="skill-category">

          <div className="category-heading">
            <span>01</span>

            <div>
              <p>PROGRAMMING</p>
              <h2>Programming Languages</h2>
            </div>
          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon python">Py</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>Python</h3>

              <p>
                Programming, data analysis and AI development.
              </p>

              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon java">J</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>Java</h3>

              <p>
                Object-oriented programming and application development.
              </p>

              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon cpp">C++</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>C / C++</h3>

              <p>
                Programming fundamentals, OOP and problem solving.
              </p>

              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

          </div>
        </div>


        {/* WEB DEVELOPMENT */}
        <div className="skill-category">

          <div className="category-heading">
            <span>02</span>

            <div>
              <p>DEVELOPMENT</p>
              <h2>Web Development</h2>
            </div>
          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon html">HTML</span>
                <span className="skill-level">Comfortable</span>
              </div>

              <h3>HTML</h3>

              <p>
                Creating structured and semantic web pages.
              </p>

              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon css">CSS</span>
                <span className="skill-level">Comfortable</span>
              </div>

              <h3>CSS</h3>

              <p>
                Responsive layouts, animations and modern UI design.
              </p>

              <div className="skill-bar">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon js">JS</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>JavaScript</h3>

              <p>
                Interactive web applications and frontend logic.
              </p>

              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon react">R</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>React</h3>

              <p>
                Building component-based modern web interfaces.
              </p>

              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon node">N</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>Node.js</h3>

              <p>
                Backend development using JavaScript and Express.
              </p>

              <div className="skill-bar">
                <span style={{ width: "65%" }}></span>
              </div>
            </div>

          </div>
        </div>


        {/* AI & DATA */}
        <div className="skill-category">

          <div className="category-heading">
            <span>03</span>

            <div>
              <p>ARTIFICIAL INTELLIGENCE</p>
              <h2>AI & Data Science</h2>
            </div>
          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon ai">AI</span>
                <span className="skill-level">Exploring</span>
              </div>

              <h3>Artificial Intelligence</h3>

              <p>
                Exploring intelligent systems and AI applications.
              </p>

              <div className="skill-bar">
                <span style={{ width: "65%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon ml">ML</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>Machine Learning</h3>

              <p>
                Learning models, algorithms and practical ML applications.
              </p>

              <div className="skill-bar">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon nlp">NLP</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>NLP</h3>

              <p>
                Natural language processing and text-based applications.
              </p>

              <div className="skill-bar">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon genai">✦</span>
                <span className="skill-level">Exploring</span>
              </div>

              <h3>Generative AI</h3>

              <p>
                Exploring LLMs, prompting and AI-powered applications.
              </p>

              <div className="skill-bar">
                <span style={{ width: "65%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon ds">DS</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>Data Science</h3>

              <p>
                Data analysis, statistics and extracting useful insights.
              </p>

              <div className="skill-bar">
                <span style={{ width: "65%" }}></span>
              </div>
            </div>

          </div>
        </div>


        {/* DATABASE */}
        <div className="skill-category">

          <div className="category-heading">
            <span>04</span>

            <div>
              <p>DATA STORAGE</p>
              <h2>Databases</h2>
            </div>
          </div>


          <div className="skills-grid database-grid">

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon mysql">SQL</span>
                <span className="skill-level">Comfortable</span>
              </div>

              <h3>MySQL</h3>

              <p>
                Relational databases, queries and database design.
              </p>

              <div className="skill-bar">
                <span style={{ width: "75%" }}></span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon mongo">M</span>
                <span className="skill-level">Learning</span>
              </div>

              <h3>MongoDB</h3>

              <p>
                NoSQL database development for modern applications.
              </p>

              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

          </div>
        </div>


        {/* TOOLS */}
        <div className="skill-category">

          <div className="category-heading">
            <span>05</span>

            <div>
              <p>DEVELOPER TOOLKIT</p>
              <h2>Tools & Technologies</h2>
            </div>
          </div>


          <div className="tools-list">

            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>MongoDB Atlas</span>
            <span>MySQL Workbench</span>
            <span>Node.js</span>
            <span>Express.js</span>

          </div>

        </div>

      </section>


      {/* BOTTOM MESSAGE */}
      <section className="skills-bottom">

        <p>CONTINUOUSLY LEARNING</p>

        <h2>
          Skills grow when
          <span> you build.</span>
        </h2>

        <p>
          I continuously improve my technical skills by learning new
          technologies and building practical projects.
        </p>

      </section>

    </main>
  );
}

export default Skills;