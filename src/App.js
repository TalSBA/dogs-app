import { HashRouter, Route, Switch } from "react-router-dom";
import Gallery from "./Pages/Gallery";
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
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
