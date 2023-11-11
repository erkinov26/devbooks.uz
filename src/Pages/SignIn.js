import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../Data/UserData";
import img from "../images/logInLeft.svg";
export default function SignIn() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onsubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line array-callback-return
    userData.filter((user) => {
      if (
        user.email === emailRef.current.value.trim() &&
        user.password === passwordRef.current.value.trim()
      ) {
        return navigate("/bosh_sahifa");
      }
    });
  };
  return (
    <div className="logInSection">
      <div className="logInLeft">
        <img src={img} alt={img} className="logInLeftImg" />
      </div>
      <div className="logInRight">
        <form className="logInForm" onSubmit={onsubmit}>
          <h1 className="logInTitle">Sign in</h1>
          <p className="questionText">
            Do not you have an account ?{" "}
            <span
              className="innerQuestionText"
              onClick={() => navigate("/SignUp")}
            >
              Sign up
            </span>
          </p>
          <input
            ref={emailRef}
            className="FormInput"
            placeholder="Email"
            type="email"
          />
          <input
            ref={passwordRef}
            className="FormInput"
            placeholder="Password"
            type="text"
          />
          <button className="logBtn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
