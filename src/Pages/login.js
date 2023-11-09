import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logInLeftImg from "../images/logInLeft.svg";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onsubmit = (e) => {
    e.preventDefault();

    data.filter((user) => {
      if (user.name && user.password) {
        return navigate("/bosh-sahifa");
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
            Do not you have an account?{" "}
            <span className="innerQuestionText">Sign up</span>
          </p>
          <input className="userNameInput" placeholder="Email" type="text" />
          <input
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
