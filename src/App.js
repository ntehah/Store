import React, { Fragment } from 'react';
import Media from "react-media";
import DesktopNavBar from "./components/layout/DesktopNavBar";
import MobilNavBar from "./components/layout/MobilNavBar";
import Data from "./components/Data"
import ShowProduct from "./components/ShowProduct";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"; 

function App() {
  return (
    <Router>
    <div className="App" style={{ backgroundColor: "#F7DC6F" }} >
      <Media
        queries={{
          small: "(max-width: 768px)",
          large: "(min-width: 769px)",
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && <MobilNavBar />}
            {matches.large && <DesktopNavBar />}
          </Fragment>
        )}
      </Media>
      <Switch>
        <Route path="/" exact component={Data}/>
        <Route path="/product/:id" component={ShowProduct}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
