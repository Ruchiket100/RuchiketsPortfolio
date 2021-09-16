import React from "react";
// Style
import "../styles/App.css";
// Components
import Programmer from "./Programmer";
import Artist from "./Artist";

import { Route, Switch } from "react-router-dom";
// aos
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  const error = () => {
    return <h1>Error</h1>;
  };
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" component={Programmer} exact />
          <Route path="/Artist" component={Artist} />
          <Route component={error} />
        </Switch>
        {/* Programmer */}
        {/* <Programmer /> */}
      </main>
    </div>
  );
};

export default App;
// we have to use all in components- to use multiple times
