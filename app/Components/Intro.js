import Image from "next/image";
import NavList from "./NavList";
import Button from "react-bootstrap/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Intro() {
  return (
    <>
      <section id="about" className="intro-container">
        <div className="blue-back">
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaLinkedin className="icon" />
            <FaYoutube className="icon" />
            <img className="intro-img" src="/images/intro-photo.png" />
          </div>
        </div>
        <div className="intro-text">
          <p className="intro-one">
            I’m Rasha Mahmoud, passionate about creating attractive and
            functional websites and mobile apps. With a blend of design skills,
            Front-end expertise, and experience with React Native, I deliver
            unique online experiences that engage and captivate users.
          </p>
          <br />
          <p className="intro-two">
            Looking for a Front-end developer to revamp your project’s website
            or app? Look no further than Rasha Mahmoud. With experience in
            building interactive interfaces and a focus on user experience, I
            can enhance your site or app, helping attract more visitors and
            improve overall usability.
          </p>
        </div>
      </section>
    </>
  );
}
