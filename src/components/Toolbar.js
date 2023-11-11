import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/account-img.png";
export default function Toolbar({
  profileToolBar,
  openAccountModal,
  setOpenAccountModal,
  setProfileToolbar,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="user-left"
      onClick={() => setOpenAccountModal(!openAccountModal)}
    >
      <img
        className="account-img"
        src={img}
        alt="img"
        onClick={() => setProfileToolbar(!profileToolBar)}
      />
      {profileToolBar ? (
        <i className="bx bx-chevron-up"></i>
      ) : (
        <i className="bx bx-chevron-down"></i>
      )}
      <div
        className={`profileToolBar ${
          profileToolBar ? "profileToolBarBlock" : ""
        }`}
      >
        <p
          className="profileToolBarItem"
          onClick={() => navigate("/my_account")}
        >
          Profile
        </p>
        <p className="profileToolBarItem" onClick={() => navigate("/security")}>
          Security
        </p>
        <p className="profileToolBarItem" onClick={() => navigate("/settings")}>
          Settings
        </p>

        <p className="profileToolBarItem" onClick={() => navigate("/")}>
          Log Out
        </p>
        <span
          onClick={() => setProfileToolbar(!profileToolBar)}
          className="toolbarX"
        >
          <i class="bx bx-x"></i>
        </span>
      </div>
    </div>
  );
}
