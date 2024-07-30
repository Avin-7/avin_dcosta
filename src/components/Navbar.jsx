import React, { useState } from "react";

function Navbar() {
  const [showlinks, setShowlinks] = useState(false);
  function handleSidebar() {
    return (
      <div>
        <nav className="nav-for-small-screen">
          <ul className="sidebar">
            <li>
              <a
                className="nav-link"
                href="#home"
                onClick={() => {
                  setShowlinks(!showlinks);
                  handleSidebar();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                onClick={() => {
                  setShowlinks(!showlinks);
                  handleSidebar();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#skills"
                onClick={() => {
                  setShowlinks(!showlinks);
                  handleSidebar();
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contact"
                onClick={() => {
                  setShowlinks(!showlinks);
                  handleSidebar();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <div>
        <nav className="nav-container">
          <ul className=" nav-max">
            <li className="hideOnMobile logo">
              <a href="#home">
                Avin <span>.</span>
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="#home">Home</a>
            </li>

            <li className="hideOnMobile">
              <a href="#about">About</a>
            </li>
            <li className="hideOnMobile">
              <a href="#skills">Skills</a>
            </li>
            <li className="hideOnMobile">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" responsive-nav">
        <div className=" logo">
          <a href="#home">
            Avin <span>.</span>
          </a>
        </div>
        <div className="menu-button">
          {showlinks ? (
            <div>
              <button onClick={() => setShowlinks(!showlinks)}>
                <ion-icon name="close" size="large"></ion-icon>
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => setShowlinks(!showlinks)}>
                <ion-icon name="reorder-three-outline" size="large"></ion-icon>
              </button>
            </div>
          )}
        </div>
      </div>
      <div>{showlinks ? handleSidebar() : ""}</div>
    </div>
  );
}

export default Navbar;
