import React from "react";
import pfpNew from "../assets/pfpNew.png";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="left-about">
          <h1>Avin Joy Dcosta</h1>
          <p className="about-me-p">
            I&apos;m a frontend developer pursuing a Bachelor&apos;s in Computer
            Application at Alva&apos;s Degree College. My enthusiasm for coding
            and new technologies drives me to create remarkable web experiences.
            <br />
            <br />
            Equipped with a robust skill set in HTML, CSS, JavaScript, and React
            JS, I craft visually stunning and highly functional web interfaces.
            <br />
            <br />
            My expertise in Tailwind CSS ensures that every project I undertake
            is both responsive and aesthetically pleasing.
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
