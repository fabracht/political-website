import React from "react";
// import { initGA } from "./";
import GaListener from "./GaListener";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./layout/Header";
import {
  Verdade,
  Programa,
  Home,
  Trabalho,
  Pandemia,
  Volta,
  DireitaEsquerda,
  Projetos,
  ProjetoFarmacia,
  Vereadora,
  MinhaHistoria,
  Videos,
} from "./pages/";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <GaListener>
          <Switch>
            <Route path="/posicionamentos/verdade">
              <Verdade />
            </Route>
            <Route path="/posicionamentos/trabalho">
              <Trabalho />
            </Route>
            <Route path="/posicionamentos/pandemia">
              <Pandemia />
            </Route>
            <Route path="/posicionamentos/volta">
              <Volta />
            </Route>
            <Route path="/posicionamentos/direitaesquerda">
              <DireitaEsquerda />
            </Route>
            <Route path="/projetos/projetos">
              <Projetos />
            </Route>
            <Route path="/projetos/projetofarmacia">
              <ProjetoFarmacia />
            </Route>
            <Route path="/programa">
              <Programa />
            </Route>
            <Route path="/vereadora/pqvereadora">
              <Vereadora />
            </Route>
            <Route path="/vereadora/minhahistoria">
              <MinhaHistoria />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </GaListener>
      </Router>
    </div>
  );
}

export default App;
