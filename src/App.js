import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./components/dashboard";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return <Dashboard />;
}

export default App;
