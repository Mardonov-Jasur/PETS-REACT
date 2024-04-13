import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Dishes from "./components/dishes";
import { Container } from "@mui/material";
import { Home } from "./screens/HOME";
import { PETS } from "./screens/PETS";
import { FORPETS } from "./screens/FORPETS";
import { COMMUNITY } from "./screens/COMMUNITY";
import { MYPAGE } from "./screens/MYPAGE";
import { HELP } from "./screens/HELP";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>{" "}
            <li>
              <Link to={"/pets"}>PETS</Link>
            </li>{" "}
            <li>
              <Link to={"/for_pets"}>FOR PETS</Link>
            </li>{" "}
            <li>
              <Link to={"/community"}>COMMUNITY</Link>
            </li>{" "}
            <li>
              <Link to={"/my_page"}>MY PAGE</Link>
            </li>{" "}
            <li>
              <Link to={"/help"}>HELP</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>{" "}
          <Route path="/pets">
            <PETS />
          </Route>{" "}
          <Route path="/for_pets">
            <FORPETS />
          </Route>{" "}
          <Route path="/community">
            <COMMUNITY />
          </Route>{" "}
          <Route path="/my_page">
            <MYPAGE />
          </Route>{" "}
          <Route path="/help">
            <HELP />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Bam() {
  return <h1>Privet</h1>;
}
