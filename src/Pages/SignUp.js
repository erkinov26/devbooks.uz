import React, { useRef, useState } from "react";
import SignUpImageLeft from "../images/SignUpImageLeft.png";
import { useNavigate } from "react-router-dom";
import userData from "../Data/UserData";
export default function SignUp() {
  const [data, setData] = useState(userData);
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  const addNewUser = () => {
    setData(...data, {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      password: password,
    });
    navigate("/bosh_sahifa");
  };
  console.log(data, "data");

  const navigate = useNavigate();
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
