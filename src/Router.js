import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mask from "./Mask";

/**
 * This component is just a simple example of how React could mess up your 
 * FullStory settings. Please read https://reactjs.org/docs/reconciliation.html
 * to understand why.
 * 
 * Given `<Mask />` is a common parent between all the pages, 
 * React's reconciliation algorithm reuses the `<div>` defined inside 
 * `<Mask />` preventing FS to correctly follow what I want.
 * 
 * Please check the next comment where I'm going to explain how to fix this 🥷.
 */
function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mask exclude>
            <Home />
          </Mask>
        </Route>
        <Route exact path="/A">
          <Mask>
            <A />
          </Mask>
        </Route>
        <Route exact path="/B">
          <Mask unmask>
            <B />
          </Mask>
        </Route>
      </Switch>
    </Router>
  );
}

/**
 * The following functions are the pages. In case you want to fix the problem 
 * of reusing the `<div>` present inside the `<Mask>`, please uncomment the 
 * usage of `<Mask>` in the following 3 functions and REMOVE the usage inside
 * `Root()`. Making this change, the React's reconciliation algorithm is 
 * going to completely detach the DOM every time we switch between pages, 
 * preventing the problem I'm facing.
 */
function Home() {
  return (
    // <Mask exclude>
    <>
      <h2>NOT RECORDED PAGE</h2>
      <br />
      <Link to="/A">Go A</Link>
      <br />
      <Link to="/B">Go B</Link>
    </>
    // </Mask>
  );
}

function A() {
  return (
    // <Mask>
    <>
      <h2>PRIVATE BY DEFAULT PAGE</h2>
      <Link to="/">Go Home</Link>
      <br />
      <Link to="/B">Go B</Link>
    </>
    // </Mask>
  );
}

function B() {
  const divStyle = {
    color: "blue",
    textAlign: "right",
  };

  return (
    // <Mask unmask>
    <>
      <h2 style={divStyle}>UNMASKED PAGE</h2>
      <Link to="/">Go Home</Link>
      <br />
      <Link to="/A">Go A</Link>
    </>
    // </Mask>
  );
}

export default Root;
