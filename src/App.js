import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./components/dashboard";

library.add(fab, faCaretUp, faCaretDown);

function App() {
  return <Dashboard />;
}

export default App;
