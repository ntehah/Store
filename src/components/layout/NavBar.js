import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobilNavBar from "./MobilNavBar";
import styled from "styled-components";

class NavBar extends React.Component {
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
        <DesktopNavBar></DesktopNavBar>
        <MobilNavBar
          displayNav={this.state.displayNav}
          buttonhundle={this.buttonhundle}
        ></MobilNavBar>
      </div>
    );
  }
}
export default NavBar;
