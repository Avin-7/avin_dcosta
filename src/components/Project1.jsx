import React from "react";
import pomodoro from "../assets/pomodoro.png";
function Project1() {
  return (
    <div>
      <div className="project" id="project">
        <div>
          <div className="project1">
            <div className="project-img">
              <img src={pomodoro} alt="" />
            </div>
            <div className="project-info">
              <h2>Pomodoro Timer</h2>
              <p>
                The Pomodoro Timer application helps users manage their time
                effectively using the Pomodoro Technique.
                <br />
                <br />
                Provides a structured approach to working in intervals, helping
                users stay focused and reduce burnout.
              </p>
              <br />
              <a
                target="_blank"
                href="https://pomodoro-productivity-booster.vercel.app/"
              >
                View site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
