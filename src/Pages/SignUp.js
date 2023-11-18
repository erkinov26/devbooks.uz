import React, { useRef, useState } from "react";
import SignUpImageLeft from "../images/SignUpImageLeft.png";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
export default function SignUp({ userInfoData, setUserInfoData }) {
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [signUpEmailCheck, setSignUpEmailCheck] = useState(false);
  const addNewUser = (e) => {
    e.preventDefault();

    const emailExists = userInfoData.some(
      (user) => user.email === email.current.value.trim()
    );

    if (emailExists) {
      setSignUpEmailCheck(true);
    } else {
      const newUser = {
        id: 3,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      setUserInfoData((prevData) => [...prevData, newUser]);

      // Check if the email is already registered in the new user data
      if (
        userInfoData.some((user) => user.email === email.current.value.trim())
      ) {
        setSignUpEmailCheck(true);
      } else {
        navigate("/bosh_sahifa");
      }
    }
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
          <Input innerRef={first_name} placeholder="First Name" type="text" />
          <Input innerRef={last_name} placeholder="Last name" type="text" />
          <Input innerRef={phone} placeholder="Phone" type="text" />
          <Input innerRef={email} placeholder="Email" type="text" />

          {signUpEmailCheck && (
            <p className="signUpEmailCheck">
              This email has already been registered.
            </p>
          )}
          <Input innerRef={password} placeholder="Password" type="password" />
          <button className="logBtn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
