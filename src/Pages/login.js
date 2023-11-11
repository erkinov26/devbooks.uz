import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logInLeftImg from "../images/logInLeft.svg";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      email: "devbook@gmail.com",
      password: "devbooks.uz",
    },
    {
      email: "developerbooks@gmail.com",
      password: "developerbooks.uz",
    },
  ]);
  const emailRef = useRef();
  const passwordRef = useRef();
  const onsubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line array-callback-return
    data.filter((user) => {
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
        <img src={logInLeftImg} alt={logInLeftImg} className="logInLeftImg" />
      </div>
      <div className="logInRight">
        <form className="logInForm" onSubmit={onsubmit}>
          <h1 className="logInTitle">Sign in</h1>
          <p className="questionText">
            Do not you have an account ?{" "}
            <span className="innerQuestionText">Sign up</span>
          </p>
          <input
            ref={emailRef}
            className="userNameInput"
            placeholder="Email"
            type="email"
          />
          <input
            ref={passwordRef}
            className="userPasswordInput"
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
};

export default Login;
