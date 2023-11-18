import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
export default function Header({ setOpen, currentUserImg }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [profileToolBar, setProfileToolbar] = useState(false);
  const currentPath = location.pathname;
  return (
    <div className="main-header">
      <div className="header">
        <h1 className="section-title"> BADIYAT</h1>
        <ul className="navbar">
          <li className="nav-item">
            <p
              className={`nav-link ${
                currentPath === "/bosh_sahifa" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/bosh_sahifa");
                setOpen(false);
              }}
            >
              Bosh Sahifa
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${currentPath === "/nasr" ? "active" : ""}`}
              onClick={() => {
                navigate("/nasr");
                setOpen(false);
              }}
            >
              Nasr
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${currentPath === "/nazm" ? "active" : ""}`}
              onClick={() => {
                navigate("/nazm");
                setOpen(false);
              }}
            >
              Nazm
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                currentPath === "/maqolalar" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/maqolalar");
                setOpen(false);
              }}
            >
              Maqolalar
            </p>
          </li>
          <li className={`nav-item`}>
            <p
              className={`nav-link ${currentPath === "/forum" ? "active" : ""}`}
              onClick={() => {
                navigate("/forum");
                setOpen(false);
              }}
            >
              Forum
            </p>
          </li>
        </ul>
        <Toolbar
          setOpenAccountModal={setOpenAccountModal}
          openAccountModal={openAccountModal}
          setProfileToolbar={setProfileToolbar}
          profileToolBar={profileToolBar}
          currentUserImg={currentUserImg}
        />
      </div>
      <button
        className="menu-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <i className="bx bx-menu"></i>
      </button>
    </div>
  );
}
