import React, { Component } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import Home from "./Home";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemonList from "./MyPokemonList";
import { PokemonProvider } from "./Pokemon-Context";

class Main extends Component {
  render() {
    document.title = process.env.REACT_APP_TITLE;

    return (
      <HashRouter>
        <PokemonProvider>
          <div
            className="min-vh-100"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('background.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
            }}
          >
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
              <div className="container-fluid">
                <NavLink to="/" draggable="false" className="navbar-brand">
                  <img
                    draggable="false"
                    src="/favicon.png"
                    width="30"
                    className="d-inline-block align-text-top me-2"
                    alt={"Favicon - " + process.env.REACT_APP_TITLE}
                  />
                  <span>{process.env.REACT_APP_NAME}</span>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <NavLink to="/" draggable="false" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/pokemon-list"
                        draggable="false"
                        className="nav-link"
                      >
                        Pokemon List
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/my-pokemon-list"
                        draggable="false"
                        className="nav-link"
                      >
                        My Pokemon List
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon-list" component={PokemonList} />
              <Route path="/my-pokemon-list" component={MyPokemonList} />
              <Route path="/detail" component={PokemonDetail} />
            </Switch>
          </div>
        </PokemonProvider>
      </HashRouter>
    );
  }
}

export default Main;
