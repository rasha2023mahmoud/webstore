import Button from "react-bootstrap/Button";
import Image from "next/image";
import DropList from "./DropList";
export default function NavList() {
  return (
    <>
      <div className="mainListContainer">
        <div className="logo-content">
          <h1 className="web-name">Web Store</h1>
          <Image
            src="/images/logo-3.png"
            alt="logo"
            width={50}
            height={60}
            className="logo"
          />
        </div>
        <ul className="header-list">
          <li className="buttons">
            <Button href="#about" className="nav-btn">
              About
            </Button>
          </li>
          <li className="buttons">
            <Button href="#feature" className="nav-btn">
              Portfolio
            </Button>
          </li>
          <li className="buttons">
            <Button href="#services" className="nav-btn">
              Service
            </Button>
          </li>
        </ul>
        <Button href="#contact" className="connect-button">
          Let’s connect
        </Button>
      </div>
      <DropList />
    </>
  );
}
