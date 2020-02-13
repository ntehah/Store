import React, { Fragment } from "react";
import Media from "react-media";
import DesktopNavBar from "./components/layout/DesktopNavBar";
import MobilNavBar from "./components/layout/MobilNavBar";
import Data from "./components/Data";
import ShowProduct from "./components/ShowProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCompte from "./components/MyCompte";

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/" exact component={Data} />
          <Route path="/product/:id" component={ShowProduct} />
          <Route path="/mycompte" component={MyCompte} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
