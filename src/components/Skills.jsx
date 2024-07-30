import React from "react";
import git from "../assets/git.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import reactSvg from "../assets/reactSVG.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwind.svg";

function Skills() {
  return (
    <div>
      <div className="">
        <div className="skills" id="skills">
          <div className="skills-section">
            <div className="skill">
              <img src={html} alt="" width="80px" height="80px" />
              <h4>Html</h4>
            </div>
            <div className="skill css-skill">
              <img src={css} alt="" width="95px" height="95px" />
              <h4>CSS</h4>
            </div>
            <div className="skill">
              <img src={js} alt="" width="80px" height="80px" />
              <h4>Javascript</h4>
            </div>
          
            <div className="skill">
              <img src={reactSvg} alt="" width="80px" height="80px" />
              <h4>React</h4>
            </div>

            <div className="skill">
              <img src={git} alt="" width="80px" height="80px" />
              <h4>Git</h4>
            </div>
            <div className="skill">
              <img src={tailwind} alt="" width="80px" height="80px" />
              <h4>Tailwind</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
