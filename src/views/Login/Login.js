import React, { useEffect, useState } from "react";
import logo from "../../assets/images/i_logo.png";
import { Link } from "react-router-dom";
const Login = ({ history }) => {
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const [displayId, setDisplyId] = useState({ display: "none" });
  const [displayPw, setDisplyPw] = useState({ display: "none" });

  const click = async () => {
    history.push("/main");
  };

  return (
    <div id="loginWrap">
      <div className="back">
        <div className="login">
          <h1>
            <img src={logo} alt="SDI on" />
          </h1>
          <div className="formBack">
            <h2>LOGIN</h2>
            <div className="basicLogin">
              <div className="basicIp">
                <input type="text" id="id" name="id" placeholder="ID" />
                <p className="erMsg" style={displayId}>
                  Please enter an ID
                </p>
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  placeholder="Password"
                />
                <p className="erMsg" style={displayPw}>
                  Please enter password
                  <br />
                  Invalid ID/Password combination
                </p>
              </div>
              <button type="button" className="btnL wFull" onClick={click}>
                Login
              </button>
            </div>
            <div className="goJoin">
              <span className="checkSet">
                <input type="checkbox" id="one" />
                <label htmlFor="one">
                  <i></i>Remember me
                </label>
              </span>
              <span className="right">
                Forgot?
                <Link to={{ pathname: "/findaccount", state: { tab: 0 } }}>
                  ID
                </Link>
                /
                <Link to={{ pathname: "/findaccount", state: { tab: 1 } }}>
                  Password
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
