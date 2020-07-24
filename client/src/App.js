import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";

import UserEdit from "./components/pages/UserEdit";
import NotFound from "./components/pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={SignIn} />

            <Route exact path="/user-edit" component={UserEdit} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
