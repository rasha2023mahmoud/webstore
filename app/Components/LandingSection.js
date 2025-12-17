import Image from "next/image";
import NavList from "./NavList";
import Button from "react-bootstrap/Button";
export default function LandingSection() {
  return (
    <>
      <section className="landing-section">
        <NavList />
        <div className="land-text">
          <h1 className="land-title">
            Freelance web developer <br /> based in Egypt
          </h1>
          <p className="land-paragraph">
            Front-End development services provided by a freelance developer
            based in Egypt to meet your website needs.
          </p>
        </div>
        <div className="land-button">
          <Button href="#contact" className="land-btn1">
            Let’s connect
          </Button>
          <Button href="#store" className="land-btn">Check my work</Button>
        </div>
      </section>
    </>
  );
}
