import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Creativecarousel } from "./components/Creative-carousel";
import { NotFound } from "./components/404";

/*-----pages-----*/
// import { Home } from "./Home";
// import { Home2 } from "./Home2";
// import { Home3 } from "./Home3";
// import { Home4 } from "./Home4";
// import { Home5 } from "./Home5";
// import { Home6 } from "./Home6";
// import { Homefrelencer } from "./Home-frelencer";
// import { HomeDeveloper } from "./Home-developer";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/main" component={Home} /> */}
          {/* <Route path="/Home2" component={Home2} />
            <Route path="/Home3" component={Home3} />
            <Route path="/Home4" component={Home4} />
            <Route path="/Home5" component={Home5} />
            <Route path="/Home6" component={Home6} />  */}
          {/* <Route path="/Home-frelencer" component={Homefrelencer} /> */}
          <Route exact path="/" component={Creativecarousel} />
          {/* <Route path="/Home-developer" component={HomeDeveloper} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
