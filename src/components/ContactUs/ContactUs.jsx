import React from "react";

export default function ContactUs() {
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="title mt-4 darkTitle text-center">
        <h1>CONATCT SECTION</h1>
        <div className="position-relative">
          <span>
            <i class="fa-solid fa-star px-3 z-1"></i>
          </span>
        </div>
      </div>
      <div className="w-50 mx-auto">
        <div class="form-floating mb-3 mt-4">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="User Name"
          />
          <label for="floatingInput">User Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingPassword"
            placeholder="User Age"
          />
          <label for="floatingPassword">User Age</label>
        </div>
        <div class="form-floating mb-3">
          <input type="eamil" class="form-control" placeholder="User Email" />
          <label for="floatingInput">User Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="User password"
          />
          <label for="floatingInput">User Password</label>
        </div>
        <div class="form-floating mb-3">
          <button className="btn btn-success">Send Message</button>
        </div>
      </div>
    </div>
  );
}
