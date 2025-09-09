// src/components/Footer.jsx
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/somp.png"
            onClick={() => (window.location.hash = "")}
            aria-label="Go to homepage"
          />
          <p className="footer-tagline">
            Practical courage for a life you enjoy.
          </p>
        </div>

        {/* Site nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul>
            <li>
              <button
                className="linklike"
                onClick={() => (window.location.hash = "")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="linklike"
                onClick={() => (window.location.hash = "#/blog")}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className="linklike"
                onClick={() => (window.location.hash = "#/youtube")}
              >
                YouTube
              </button>
            </li>
            <li>
              <button
                className="linklike"
                onClick={() => (window.location.hash = "#/about")}
              >
                About
              </button>
            </li>
            <li>
              <a className="linklike" href="mailto:dinar@seatofmyplans.com">
                Contact
              </a>
            </li>
            <li>
              <a className="linklike" href="#/privacy">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        {/* Social */}
        <div className="footer-social" aria-label="Follow seatofmyplans">
          <span className="footer-social-label">Follow:</span>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-anchor"
            aria-label="YouTube"
            title="YouTube"
          >
            <FaYoutube className="nav-link nav-icon nav-yt" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-anchor"
            aria-label="Instagram"
            title="Instagram"
          >
            <AiFillInstagram className="nav-link nav-icon nav-ig" />
          </a>
        </div>
      </div>

      {/* Legal strip */}
      <div className="container footer-legal">
        <p>©{year} Seat Of My Plans. All rights reserved.</p>
        <p className="footer-made">Made on the move.</p>
        <p className="footer-version">v1.0.0</p>
      </div>
    </footer>
  );
}
