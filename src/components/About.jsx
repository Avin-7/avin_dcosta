import React from "react";
import pfpNew from "../assets/pfpNew.png";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="left-about">
          <h1>Avin Joy Dcosta</h1>
          <p className="about-me-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur facilis optio quia aperiam tempore omnis incidunt
            voluptatum quod consequuntur error iste, unde illo soluta in maiores
            enim, distinctio accusantium voluptatibus.
          </p>
        </div>
        <div className="right-about">
          <img src={pfpNew} alt="" width="300px" height="300px" />
        </div>
      </div>
    </div>
  );
}

export default About;
