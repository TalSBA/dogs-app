import { HashRouter, Route, Switch } from "react-router-dom";
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
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
