import React from "react";
import { MdOpenInNew } from "react-icons/md";
import Avin_Joy_Dcosta_Resume from "../assets/Avin_Joy_Dcosta_Resume.pdf";
function Hero() {
  function downloadFile() {
    window.open(Avin_Joy_Dcosta_Resume);
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
        {/* <button className="download-my-cv" onClick={downloadFile} type="button">
          <span>View Resume</span> <MdOpenInNew className="view-resume-icon"/>
        </button> */}
        <div className=" view-resume-div" onClick={downloadFile}>
          <button className="view-resume-button" type="button">
            View Resume
          </button>
          <MdOpenInNew className="view-resume-icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
