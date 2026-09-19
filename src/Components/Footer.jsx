import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-logo">
        J<span>.</span>S
      </div>

      <p>
        © 2026 Jay Nitin Surse. All Rights Reserved.
      </p>

      <div className="footer-links">

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

    </footer>
  );
}

export default Footer;