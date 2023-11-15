import React, { useRef } from "react";
import SignUpImageLeft from "../images/SignUpImageLeft.png";
import { useNavigate } from "react-router-dom";
export default function SignUp({ userInfoData, setUserInfoData }) {
  console.log(userInfoData, "userdata signup");
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  // const [userYes, setUserYes] = useState();
  const addNewUser = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    // userData.map((user) => {
    // if (user.email !== email.current.value.trim()) {
    // setUserYes(false);
    setUserInfoData(...userInfoData, {
      id: 3,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      password: password,
    });
    console.log("allowed");
    navigate("/bosh_sahifa");
    // } else if (user.email === email.current.value.trim()) {
    // setUserYes(true);
    // console.log("not allowed");
    // navigate("/SignUp");
    // // }
    // });
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
            style={{ marginBottom: 0 }}
            required
            ref={email}
            className="FormInput"
            placeholder="Email"
            type="email"
          />
          {/* <p className="signUpEmailValidation">
            {userYes ? "This email have already exsist !" : null}
          </p> */}
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
