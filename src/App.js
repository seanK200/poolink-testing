import { Switch, Route } from "react-router-dom";
import MyNavbar from './MyNavbar'
import Components from './Views/Components'
import AdvancedComponents from "./Views/AdvancedComponents";

function App() {
  return (
    <>
      <MyNavbar />
      <Switch>
        <Route path="/components"><Components /></Route>
        <Route path="/advanced-components"><AdvancedComponents /></Route>
        <Route path="/">Test</Route>
      </Switch>
    </>
  );
}

export default App;
