import React from "react";
import Header from "./Header";

export default function SideBar({ open, setOpen }) {
  return (
    <div
      className={`sidebar ${
        open ? "sidebarTransformOpen" : "sidebarTransformClose"
      }`}
    >
      <Header setOpen={setOpen} />
      <button className="close-Sidebar" onClick={() => setOpen(false)}>
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
}
// <i className="bx bx-exit"></i>
