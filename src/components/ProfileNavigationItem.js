import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfileNavigationItem({
  children,
  pathname,
  spanNumber,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <li
      className={`myProfileNavItem ${currentPath === pathname ? "active" : ""}`}
    >
      <span className="myProfileNavItemNumber">{spanNumber}</span>
      <span onClick={() => navigate(pathname)} className="profileNavItemHeader">
        {children}
      </span>
    </li>
  );
}
