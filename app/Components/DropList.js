"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function DropList() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="drop">
        <div className="drop-menu">
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
          <Button>
            <CiMenuBurger onClick={toggleIsMenu} />
          </Button>
          {isOpen && (
            <>
              <ul className="header-list">
                <li className="buttons">
                  <Button className="nav-btn">About</Button>
                </li>
                <li className="buttons">
                  <Button className="nav-btn">Portfolio</Button>
                </li>
                <li className="buttons">
                  <Button className="nav-btn">Service</Button>
                </li>
                <li className="connect-button">
                  <Button className="nav-btn">Let’s connect</Button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
