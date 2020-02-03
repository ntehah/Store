import React from "react";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../logo.PNG";
import Login from "./Login";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: #232f3f;
  width: 100%;
  height: 30%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Div_Nav = styled.div`
  flex: 6;
  margin-top: 20px;
  .Nav-links {
    background-color: #232f3f;
    display: flex;
    justify-content: space-around;
  }
  .Nav-links li {
    list-style-type: none;
    padding: 10px 20px;
    border: 2px solid #f2a847;
    border-radius: 10px;
  }
  .Nav-link {
    text-decoration: none;
    font-size: 14px;
    color: #ffffff;
  }
`;

const Div_login = styled.div`
  flex: 4;
  margin-left: 2%;
`;
const Div_logo = styled.div`
  flex: 1;
  margin-top: 1%;
  img {
    width: 100%;
  }
`;

const DesktopNavBar = props => (
    <Header>
        <Div_login>
            <Login></Login>
        </Div_login>

        <Div_Nav>
            <div className="search">
                <Search class={"SearchBarDesktop"}></Search>
            </div>
            <div className="Nav">
                <ul className="Nav-links">
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                    <li>
                        <a className="Nav-link" href="#">
                            سيارات
            </a>
                    </li>
                </ul>
            </div>
        </Div_Nav>

        <Div_logo>
            <img src={logo} alt="logo for website" />
        </Div_logo>
    </Header>
);

export default DesktopNavBar;
