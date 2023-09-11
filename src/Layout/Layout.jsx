import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./layoutStyle.css";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="bodyHeight marginTop100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
