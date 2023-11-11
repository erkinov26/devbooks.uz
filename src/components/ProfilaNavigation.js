import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilaNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigation, setNavigation] = useState(false);
  const currentPath = location.pathname;
  return (
    <div className="profilenavbar">
      <ul
        className={`myProfileNavList ${
          navigation ? "myProfileNavListOpen" : ""
        } `}
      >
        <i
          class="bx bx-menu-alt-left"
          onClick={() => setNavigation(!navigation)}
        ></i>
        <li
          className={`myProfileNavItem ${
            currentPath === "/my_account" ? "active" : ""
          }`}
        >
          <span className="myProfileNavItemNumber">1</span>
          <span
            onClick={() => navigate("/my_account")}
            className="profileNavItemHeader"
          >
            My Account
          </span>
        </li>
        <li
          className={`myProfileNavItem ${
            currentPath === "/security" ? "active" : ""
          }`}
        >
          <span className="myProfileNavItemNumber">2</span>
          <span
            className="profileNavItemHeader"
            onClick={() => navigate("/security")}
          >
            Security
          </span>
        </li>
        <li
          className={`myProfileNavItem ${
            currentPath === "/setting" ? "active" : ""
          }`}
        >
          <span className="myProfileNavItemNumber">3</span>
          <span
            className="profileNavItemHeader"
            onClick={() => navigate("/setting")}
          >
            Setting
          </span>
        </li>
      </ul>
      <span
        className="backFromProfile"
        onClick={() => navigate("/bosh_sahifa")}
      >
        <i className="bx bx-arrow-back"></i>
      </span>
      <i
        class="bx bx-menu-alt-right"
        onClick={() => setNavigation(!navigation)}
      ></i>
    </div>
  );
}
