import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("https://jayportfolio-zwmw.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! ✓");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Frontend error:", error);
      setStatus("Unable to connect to server.");
    }
  };

  return (
    <main className="contact-page">

      {/* HEADER */}
      <section className="contact-header">
        <div className="contact-line"></div>

        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let's <span>connect.</span>
        </h1>

        <p className="contact-subtitle">
          Have a project idea, internship opportunity or just want to
          say hello? I'd be happy to hear from you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <p className="contact-small-label">
            CONTACT INFORMATION
          </p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm always interested in learning, building new projects
            and connecting with people who are passionate about
            technology, AI and software development.
          </p>

          {/* EMAIL */}
          <div className="contact-item">

            <div className="contact-icon">
              @
            </div>

            <div>
              <small>Email</small>

              <a href="mailto:jaysurse453@gmail.com">
                jaysurse453@gmail.com
              </a>
            </div>

          </div>

          {/* LOCATION */}
          <div className="contact-item">

            <div className="contact-icon">
              ●
            </div>

            <div>
              <small>Location</small>

              <p>
                Nashik, Maharashtra, India
              </p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="contact-socials">

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

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-wrapper">

          <div className="form-top">
            <p>SEND A MESSAGE</p>

            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            {/* SUBJECT */}
            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
              />

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="send-button"
            >
              Send Message
              <span>→</span>
            </button>

            {/* STATUS */}
            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </section>

      {/* BOTTOM */}
      <section className="contact-bottom">

        <div className="contact-bottom-line"></div>

        <p>
          OPEN TO LEARNING • BUILDING • COLLABORATING
        </p>

        <h2>
          Have an idea?
          <span> Let's talk.</span>
        </h2>

      </section>

    </main>
  );
}

export default Contact;