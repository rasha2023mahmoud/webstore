import { FaFacebook } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <section id="contact" className="footer-container">
        <div className="overlay"></div>
        <div className="contact-text">
          <h1>Let’s connect and create something awesome together!</h1>
          <p className="g-mail">
            <a href="mailto:webstore2026@gmail.com">webstore2026@gmail.com</a>
          </p>
          <div className="contact-icons">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.Freelancer.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreelancer className="social-icon" />
            </a>
            <a
              href="https://www.FaLinkedin.com/u/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
