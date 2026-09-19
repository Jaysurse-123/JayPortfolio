import "./Education.css";

function Education() {
  return (
    <main className="education-page">

      {/* HEADER */}
      <section className="education-header">

        <div className="education-line"></div>

        <p className="education-label">
          MY EDUCATION
        </p>

        <h1>
          My academic <span>journey.</span>
        </h1>

        <p className="education-subtitle">
          Education, learning and experiences that are shaping my
          journey in technology.
        </p>

      </section>


      {/* EDUCATION CONTENT */}
      <section className="education-content">

        <div className="timeline">


          {/* COLLEGE */}
          <div className="timeline-item">

            <div className="timeline-dot">
              01
            </div>

            <div className="timeline-card">

              <div className="education-year">
                CURRENT
              </div>

              <p className="education-type">
                BACHELOR OF ENGINEERING
              </p>

              <h2>
                B.E. in <span>Artificial Intelligence & Data Science</span>
              </h2>

              <h3>
                MET's Institute of Engineering,
                Bhujbal Knowledge City, Nashik
              </h3>

              <p className="education-description">
                Currently pursuing engineering with a focus on
                Artificial Intelligence, Data Science, programming,
                machine learning and software development.
              </p>

              <div className="education-tags">
                <span>AI & Data Science</span>
                <span>Programming</span>
                <span>Machine Learning</span>
                <span>Data Science</span>
              </div>

            </div>

          </div>


          {/* HIGHER SECONDARY */}
          <div className="timeline-item">

            <div className="timeline-dot">
              02
            </div>

            <div className="timeline-card">

              <div className="education-year">
                COMPLETED
              </div>

              <p className="education-type">
                HIGHER SECONDARY EDUCATION
              </p>

              <h2>
                Higher Secondary <span>Education</span>
              </h2>

              <h3>
                Science Stream
              </h3>

              <p className="education-description">
                Completed higher secondary education with a science
                background, building the foundation for engineering
                and technology studies.
              </p>

              <div className="education-tags">
                <span>Science</span>
                <span>Mathematics</span>
                <span>Technology</span>
              </div>

            </div>

          </div>


          {/* SCHOOL */}
          <div className="timeline-item">

            <div className="timeline-dot">
              03
            </div>

            <div className="timeline-card">

              <div className="education-year">
                COMPLETED
              </div>

              <p className="education-type">
                SCHOOL EDUCATION
              </p>

              <h2>
                Secondary <span>Education</span>
              </h2>

              <h3>
                School Education
              </h3>

              <p className="education-description">
                Completed secondary education and developed the
                fundamental academic knowledge and learning skills
                required for higher education.
              </p>

              <div className="education-tags">
                <span>Academic Foundation</span>
                <span>Learning</span>
                <span>Growth</span>
              </div>

            </div>

          </div>


        </div>


        {/* ACADEMIC HIGHLIGHTS */}
        <section className="academic-section">

          <div className="academic-heading">

            <p>
              ACADEMIC HIGHLIGHTS
            </p>

            <h2>
              Learning beyond the <span>classroom.</span>
            </h2>

          </div>


          <div className="academic-grid">

            <div className="academic-card">

              <div className="academic-icon">
                AI
              </div>

              <h3>
                Artificial Intelligence
              </h3>

              <p>
                Exploring AI concepts, intelligent systems and
                practical AI applications.
              </p>

            </div>


            <div className="academic-card">

              <div className="academic-icon">
                DS
              </div>

              <h3>
                Data Science
              </h3>

              <p>
                Learning data analysis, statistics, machine learning
                and data-driven problem solving.
              </p>

            </div>


            <div className="academic-card">

              <div className="academic-icon">
                &lt;/&gt;
              </div>

              <h3>
                Programming
              </h3>

              <p>
                Practicing Python, Java, C/C++ and web development
                through academic and personal projects.
              </p>

            </div>


            <div className="academic-card">

              <div className="academic-icon">
                ✦
              </div>

              <h3>
                Continuous Learning
              </h3>

              <p>
                Continuously learning new technologies and improving
                practical development skills.
              </p>

            </div>

          </div>

        </section>

      </section>


      {/* BOTTOM */}
      <section className="education-bottom">

        <p>
          LEARN • BUILD • GROW
        </p>

        <h2>
          The journey is still
          <span> going on.</span>
        </h2>

        <p>
          Every semester, project and new technology is another step
          towards becoming a better engineer.
        </p>

      </section>

    </main>
  );
}

export default Education;