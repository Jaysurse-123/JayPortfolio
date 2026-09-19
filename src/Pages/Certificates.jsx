import "./Certificates.css";

function Certificates() {
  return (
    <main className="certificates-page">

      {/* HEADER */}
      <section className="certificates-header">

        <div className="certificates-line"></div>

        <p className="certificates-label">
          CERTIFICATIONS
        </p>

        <h1>
          Learning & <span>certificates.</span>
        </h1>

        <p className="certificates-subtitle">
          Certifications that represent my continuous learning and
          interest in AI, technology and modern development.
        </p>

      </section>


      {/* CERTIFICATES */}
      <section className="certificates-content">

        <div className="certificates-intro">

          <p>
            MY LEARNING JOURNEY
          </p>

          <h2>
            Knowledge is something
            <span> you keep building.</span>
          </h2>

        </div>


        <div className="certificates-grid">


          {/* CERTIFICATE 01 */}
          <article className="certificate-card">

            <div className="certificate-top">

              <div className="certificate-icon">
                AI
              </div>

              <span className="certificate-number">
                01
              </span>

            </div>


            <div className="certificate-body">

              <p className="certificate-category">
                GENERATIVE AI
              </p>

              <h3>
                Introduction to
                <span> Generative AI Studio</span>
              </h3>

              <p className="certificate-description">
                A certification focused on understanding Generative AI
                concepts and exploring AI-powered technologies and
                applications.
              </p>

              <div className="certificate-footer">

                <div>
                  <small>ISSUED BY</small>
                  <strong>Simplilearn SkillUp</strong>
                </div>

                <span className="certificate-status">
                  COMPLETED
                </span>

              </div>

            </div>

          </article>


          {/* CERTIFICATE 02 */}
          <article className="certificate-card">

            <div className="certificate-top">

              <div className="certificate-icon">
                PE
              </div>

              <span className="certificate-number">
                02
              </span>

            </div>


            <div className="certificate-body">

              <p className="certificate-category">
                ARTIFICIAL INTELLIGENCE
              </p>

              <h3>
                Prompt Engineering
                <span> for Everyone</span>
              </h3>

              <p className="certificate-description">
                A certification covering prompt engineering concepts
                and techniques for working effectively with
                Generative AI systems.
              </p>

              <div className="certificate-footer">

                <div>
                  <small>ISSUED BY</small>
                  <strong>IBM</strong>
                </div>

                <span className="certificate-status">
                  COMPLETED
                </span>

              </div>

            </div>

          </article>


          {/* ADD MORE */}
          <article className="certificate-card add-certificate">

            <div className="add-icon">
              +
            </div>

            <p>
              MORE CERTIFICATIONS
            </p>

            <h3>
              More learning
              <span> coming soon.</span>
            </h3>

            <small>
              Continuously learning new technologies,
              tools and concepts.
            </small>

          </article>

        </div>


        {/* LEARNING AREAS */}
        <section className="learning-section">

          <div className="learning-heading">

            <p>
              CURRENT LEARNING
            </p>

            <h2>
              Areas I'm <span>exploring.</span>
            </h2>

          </div>


          <div className="learning-grid">

            <div className="learning-card">
              <span>01</span>
              <h3>Generative AI</h3>
              <p>
                LLMs, prompting and AI-powered applications.
              </p>
            </div>

            <div className="learning-card">
              <span>02</span>
              <h3>Machine Learning</h3>
              <p>
                ML algorithms and practical applications.
              </p>
            </div>

            <div className="learning-card">
              <span>03</span>
              <h3>Full-Stack Development</h3>
              <p>
                Building modern frontend and backend applications.
              </p>
            </div>

            <div className="learning-card">
              <span>04</span>
              <h3>Data Science</h3>
              <p>
                Data analysis, statistics and machine learning.
              </p>
            </div>

          </div>

        </section>

      </section>


      {/* BOTTOM */}
      <section className="certificates-bottom">

        <p>
          LEARN • PRACTICE • BUILD
        </p>

        <h2>
          Every certificate is
          <span> another step.</span>
        </h2>

        <p>
          Certifications are part of the journey, but practical
          projects and continuous learning remain equally important.
        </p>

      </section>

    </main>
  );
}

export default Certificates;