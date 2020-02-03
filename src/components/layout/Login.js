import React from "react";
import styled from "styled-components";
import user from "./user.png";
import pass from "./pass.png";
const Div = styled.div`
  align-items: center;
  display: flex;

  .button-login {
    flex: 2;
    width: 100%;
  }
  .button-login button {
    border: 2px solid #f2a847;
    width: 75%;
    height: 34px;
    border-radius: 10px;
    background-color: transparent;
    color: #ffffff;
    margin-bottom: 10%;
  }
  .input-login {
    flex: 5;
    width: 100%;
    padding: 20px;
  }
  .input-login input {
    border: 2px solid #ffffff;
    border-radius: 12px 0 0 12px;
    border-right: 1px solid #f2a847;
    width: 75%;
    height: 4vh;
    margin-bottom: 5%;
    background-color: transparent;
    color: #ffffff;
    ::-webkit-input-placeholder {
      text-align: center;
    }
  }
  .icon {
    border: 2px solid #f2a847;
    border-top: 3px solid #f2a847;
    border-radius: 0 12px 12px 0;
    width: 10%;
    height: 4vh;
    background-color: #f2a847;
    margin-bottom: -1.6vh;
  }
`;
const Img = styled.img``;

const Login = props => (
  <Div>
    <div className="button-login">
      <button>تسجيل الدخول</button>
      <button>انشاء حساب</button>
    </div>
    <div className="input-login">
      <div>
        <input type="email" placeholder="بريد الالكتروني"></input>
        <img className="icon" src={user} alt="" />
      </div>
      <div>
        <input type="password" placeholder="كلمة السر"></input>
        <img className="icon" src={pass} alt="" />
      </div>
    </div>
  </Div>
);

export default Login;
