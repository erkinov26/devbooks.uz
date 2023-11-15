import React, { useRef } from "react";
import SignUpImageLeft from "../images/SignUpImageLeft.png";
import { useNavigate } from "react-router-dom";
export default function SignUp({
  userInfoData,
  setUserInfoData,
  currentUser,
  setCurrentUser,
}) {
  // console.log("🚀 ~ file: SignUp.js:5 ~ SignUp ~ userInfoData:", userInfoData);
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const addNewUser = (e) => {
    e.preventDefault();

    // Accessing the current values of the refs
    const newUser = {
      id: 3,
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      phone: phone.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    setCurrentUser(newUser);
    // Updating the state using the functional form of setUserInfoData
    setUserInfoData((prevData) => [...prevData, newUser]);

    console.log("allowed");
    navigate("/bosh_sahifa");
  };

  return (
    <div className="signInSection">
      <div className="signInLeft">
        <img
          src={SignUpImageLeft}
          alt={SignUpImageLeft}
          className="signInLeftImg"
        />
      </div>
      <div className="signInRight">
        <form className="signInForm" onSubmit={addNewUser}>
          <h1 className="signInTitle">Sign up</h1>
          <p className="questionText">
            Already have an account ?{" "}
            <span className="innerQuestionText" onClick={() => navigate("/")}>
              Sign in
            </span>
          </p>
          <input
            required
            ref={first_name}
            className="FormInput"
            placeholder="First name"
            type="text"
          />
          <input
            required
            ref={last_name}
            className="FormInput"
            placeholder="Last name"
            type="text"
          />
          <input
            required
            ref={phone}
            className="FormInput"
            placeholder="phone"
            type="text"
          />
          <input
            required
            ref={email}
            className="FormInput"
            placeholder="Email"
            type="email"
          />
          <input
            required
            ref={password}
            className="FormInput"
            placeholder="Password"
            type="password"
          />
          <button className="logBtn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
