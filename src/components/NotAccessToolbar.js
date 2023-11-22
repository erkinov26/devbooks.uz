import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotAccessToolbar() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/SignIn");
      }}
      className="notAccessToolbar"
    >
      Sign In
    </div>
  );
}
