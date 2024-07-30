import React from "react";
import Avin_Dcosta_Resume from "../assets/Avin_Dcosta_Resume.pdf";
function Hero() {
  function downloadFile() {
    window.open(Avin_Dcosta_Resume);
  }

  return (
    <div >
      <div className="container hero " id="home">
        <h1 className="">Hello</h1>
        <h1>
          I&apos;m, <strong className="my-name">Avin Dcosta</strong>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          totam assumenda esse incidunt veritatis harum minus nesciunt atque
          eligendi porro.
        </p>
        {/* <a
          href="../assets/Avin_Dcosta_Resume.pdf"
          download="Avin_Dcosta_Resume.pdf"
        > */}
        <button className="download-my-cv" onClick={downloadFile} type="button">
          Download CV
        </button>
        {/* </a> */}
      </div>
    </div>
  );
}

export default Hero;
