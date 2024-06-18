import React from "react";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/About" Component={About} />

          <Route path="/Contact" Component={Contactus} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
