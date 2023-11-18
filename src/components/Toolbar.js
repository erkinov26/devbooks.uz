/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/account-img.png";
export default function Toolbar({
  profileToolBar,
  openAccountModal,
  setOpenAccountModal,
  setProfileToolbar,
  currentUserImg,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="user-left"
      onClick={() => setOpenAccountModal(!openAccountModal)}
    >
      <div
        className="accountImgBack"
        onClick={() => setProfileToolbar(!profileToolBar)}
      >
        <img
          // style={{ display: "none" }}
          className="account-img"
          src={currentUserImg}
          alt=""
        />
      </div>

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
          <i className="bx bx-x"></i>
        </span>
      </div>
    </div>
  );
}
