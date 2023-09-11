import React from "react";
import "./footerStyle.css";

export default function Footer() {
  return (
    <>
      <div className="bgPrimary">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-Unit text-white fw-bold text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 text-white">
              <div className="footer-Unit text-white fw-bold text-center">
                <h3 className="mb-3">AROUND THE WEB</h3>
                <i class="fa-brands fa-facebook fs-5 mx-2"></i>
                <i class="fa-brands fa-twitter fs-5 mx-2"></i>
                <i class="fa-brands fa-linkedin-in fs-5 mx-2"></i>
                <i class="fa-solid fa-globe fs-5 mx-2"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-Unit text-white fw-bold text-center">
                <h3 className="mb-3">ABOUT FREELANCER</h3>
                <p className="h6">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white text-center p-3">
        Copyright © Your Website 2023
      </div>
    </>
  );
}
