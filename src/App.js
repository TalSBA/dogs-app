import { HashRouter, Route, Switch } from "react-router-dom";
import Breeds from "./Pages/Breeds";
import Breed from "./Pages/Breed";
import Home from "./Pages/Home";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Breeds">
            <Breeds />
          </Route>
          <Route exact path="/Breeds/:breed">
            <Breed />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
