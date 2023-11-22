import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavItem({ pathLinkName, setOpen, text, access }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <li className="nav-item">
      <p
        className={`nav-link ${currentPath === pathLinkName ? "active" : ""}`}
        onClick={() => {
          navigate(access ? pathLinkName : "/SignIn");
          setOpen(false);
        }}
      >
        {text}
      </p>
    </li>
  );
}
