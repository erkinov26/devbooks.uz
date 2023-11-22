import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileNavigationItem from "./ProfileNavigationItem";

export default function ProfilaNavigation() {
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState(false);
  return (
    <div className="profilenavbar">
      <ul
        className={`myProfileNavList ${
          navigation ? "myProfileNavListOpen" : ""
        } `}
      >
        <i
          className="bx bx-menu-alt-left"
          onClick={() => setNavigation(!navigation)}
        ></i>

        <ProfileNavigationItem
          children="My Account"
          pathname="/my_account"
          spanNumber="1"
        />
        <ProfileNavigationItem
          children="Security"
          pathname="/security"
          spanNumber="2"
        />
        <ProfileNavigationItem
          children="Settings"
          pathname="/setting"
          spanNumber="3"
        />
      </ul>
      <span className="backFromProfile" onClick={() => navigate("/")}>
        <i className="bx bx-arrow-back"></i>
      </span>
      <i
        className="bx bx-menu-alt-right"
        onClick={() => setNavigation(!navigation)}
      ></i>
    </div>
  );
}
