import React from "react";
import "./aboutStyle.css";

export default function About() {
  return (
    <div className="bgSecondry minHeight">
      <div className="container pt-5 title text-center text-white align-middle">
        <h1>ABOUT COMPONENT</h1>
        <div className="position-relative">
          <span className="bgSecondry">
            <i class="fa-solid fa-star px-3 z-1"></i>
          </span>
        </div>
        <div className="row text-start pt-5">
          <div className="col-md-6">
            <div>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
          <div className="col-md-6">
            <div>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
