import { HashRouter, Route, Switch } from "react-router-dom";
import Breeds from "./Pages/Breeds";
import Breed from "./Pages/Breed";
import Home from "./Pages/Home";
import "./Styles/App.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={["/", "/Home"]}>
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
      <Footer/>
    </div>
  );
}

export default App;
