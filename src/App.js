import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavbar from './MyNavbar'
import Components from './Views/Components'
import AdvancedComponents from "./Views/AdvancedComponents";

function App() {
  return (
    <React.Fragment>
      <MyNavbar />
      <Switch>
        <Route path="/components"><Components /></Route>
        <Route path="/advanced-components"><AdvancedComponents /></Route>
        <Route path="/"> <Redirect to="/components"/> </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
