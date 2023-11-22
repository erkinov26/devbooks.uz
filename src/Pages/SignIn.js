import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/logInLeft.svg";
import Input from "../components/Input";
export default function SignIn({
  userInfoData,
  setUserInfoData,
  setCurrentUserInfo,
  access,
  setAccess,
}) {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [passwordCheck, setPasswordCheck] = useState(false);
  console.log("🚀 ~ file: SignIn.js:18 ~ passwordCheck:", passwordCheck);
  const onsubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    userInfoData.map((user) => {
      if (
        user.email === emailRef.current.value.trim() &&
        user.password === passwordRef.current.value.trim()
      ) {
        // eslint-disable-next-line no-sequences
        return (
          navigate("/"),
          setPasswordCheck(false),
          setCurrentUserInfo(user),
          setAccess(true)
        );
      } else if (
        user.email === emailRef.current.value.trim() &&
        user.password !== passwordRef.current.value.trim()
      ) {
        setPasswordCheck(true);
      } else if (
        user.email !== emailRef.current.value.trim() &&
        user.password !== passwordRef.current.value.trim()
      ) {
        setPasswordCheck(true);
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
          <Input innerRef={emailRef} placeholder="Email" type="text" />

          <Input
            innerRef={passwordRef}
            placeholder="Password"
            type="password"
          />
          <p className="signInPasswordCheck">
            {passwordCheck ? "Sorry, your password was incorrect." : null}
          </p>
          <button className="logBtn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
