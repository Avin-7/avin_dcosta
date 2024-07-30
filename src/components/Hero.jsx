import React from "react";
import Avin_Dcosta_Resume from "../assets/Avin_Dcosta_Resume.pdf";
function Hero() {
  function downloadFile() {
    window.open(Avin_Dcosta_Resume);
  }

  return (
    <div>
      <div className="container hero " id="home">
        <h1 className="">Hello</h1>
        <h1>
          I&apos;m, <strong className="my-name">Avin Dcosta</strong>
        </h1>
        <p>
          Passionate about coding and fueled by curiosity, I turn coffee into
          code and ideas into reality. Let&apos;s create something extraordinary
          together!
        </p>
        <button className="download-my-cv" onClick={downloadFile} type="button">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Hero;
