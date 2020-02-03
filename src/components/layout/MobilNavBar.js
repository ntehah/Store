import React from "react";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../logo.PNG";
import { GoThreeBars } from "react-icons/go";
import { IconContext } from "react-icons";

const Header = styled.header`
  display: none;
  display: flex;
  justify-content: flex-end;
  background-color: #232f3f;
  width: 100%;
  align-items: center;
  img {
    flex: 1;
    margin-top: 1%;
    height: 10%;
    justify-content: flex-end;
    width: 10%;
  }
  .search {
    flex: 4;
    width: 60vw;
  }
  .burger {
    justify-content: flex-start;
    flex: 1;
    width: 20vw;
  }
`;
const Nav = styled.nav`
  display: ${props => (props.displayNav ? "flex" : "none")};
  width: 100%;
  transition: transform 1s;
  transform: translateX(${props => (props.displayNav ? "0" : "-250px")});
`;
const Ul = styled.ul`
  background-color: #232f3f;
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  /* box-shadow: 10px 10px 5px grey; */
`;
const Li = styled.li`
  display: block;
  padding: 10px 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #f2a847;
  margin-bottom: 10px;
  justify-self: flex-end;
  text-align: center;
  a {
    text-decoration: none;
    font-size: 14px;
    color: #ffffff;
  }
  &:focus {
    background-color: forestgreen;
    outline: none;
  }
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  width: 50%;
  height: 100%;
`;

class MobilNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayNav: false, SearchMobile: false };
  }
  buttonhundle = () => {
    this.setState(prevState => {
      return { displayNav: !prevState.displayNav };
    });
  };

  render() {
    return (
      <div>
        <Header>
          <div className="burger">
            <Button onClick={this.buttonhundle}>
              <IconContext.Provider
                value={{ style:{color:"white",width:"100%",height:"100%"}}}
              >
                <GoThreeBars />
              </IconContext.Provider>
            </Button>
          </div>
          <div className="search">
            <Search class={"SearchBarMobile"}></Search>
          </div>
          <img src={logo} alt="logo here"></img>
        </Header>

        <Nav displayNav={this.state.displayNav}>
          <Ul>
            <Li>
              <a href="#">سيارات</a>
            </Li>
            <Li>
              <a href="#">سيارات</a>
            </Li>
            <Li>
              <a href="#">سيارات</a>
            </Li>
          </Ul>
          <Ul>
            <Li>
              <a href="#">سيارات</a>
            </Li>
            <Li>
              <a href="#">سيارات</a>
            </Li>
            <Li>
              <a href="#">سيارات</a>
            </Li>
          </Ul>
        </Nav>
      </div>
    );
  }
}
export default MobilNavBar;
