import React from "react";
import "./homeStyle.css";

import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="bgSecondry minHeight">
      <div className="container pt-5 title text-center text-white">
        <img src={avatar} alt="" className="avatarImg" />
        <h1>START FRAMEWORK</h1>
        <div className="position-relative">
          <span className="bgSecondry">
            <i class="fa-solid fa-star px-3 z-2"></i>
          </span>
        </div>
        <p className="pt-3">Graphic Artist - Web Designer - Illustrator </p>
      </div>
    </div>
  );
}
